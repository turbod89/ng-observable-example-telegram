import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

import { BehaviorSubject, Observable } from 'rxjs';
import {Update} from '../classes/Update';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  private url = 'https://api.telegram.org/bot' + environment.ApiToken + '/';
  protected lastUpdate = 0;
  protected longPollingLimit = 100;
  protected longPollingTimeout = 30;
  private longPollingFirstCall = true;

  protected customHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
  ;

  private updates = [];
  private sourceUpdates = new BehaviorSubject<Update[]>(this.updates);
  private sourceNewUpdates = new BehaviorSubject<Update[]>([]);

  public updates$ = this.sourceUpdates.asObservable();
  public newUpdates$ = this.sourceNewUpdates.asObservable();

  constructor(
    protected http: HttpClient,
  ) {

    this.longPolling();

  }

  private longPolling() {

    this.http.post<any>(
      this.url + 'getUpdates',
      {
        offset: this.longPollingFirstCall ? null : this.lastUpdate + 1,
        limit: this.longPollingLimit,
        timeout: this.longPollingFirstCall ? 0 : this.longPollingTimeout
      },
      {
        headers: this.customHeaders,
      },

    ).pipe (
      map(response => {

        let updates = [];

        if (response.ok && response.ok === true) {

          this.longPollingFirstCall = false;

          updates = response.result.map(updateData => {

            const update = Update.fromJson(updateData);

            if (update.get_update_id() > this.lastUpdate) {
              this.lastUpdate = update.get_update_id();
            }

            return update;
          });

        } else {}

        return updates;
      })

    ).subscribe( updates => {

        this.longPollingFirstCall = false;
        this.longPolling();

        updates.forEach (update => {
          this.updates.push(update);
          this.sourceUpdates.next(this.updates);
        });

        this.sourceNewUpdates.next(updates);

      });

    return this;
  }

}
