import { HttpService } from './http-service';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';

import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { HttpClientService } from '@nx-demo-jest/http-client-service';
import { HTTPSERVICESETTINGS } from '@nx-demo-jest/app-tokens';

@Injectable()
export class SimpleHttpService implements HttpService {
  constructor(
    private httpClientService: HttpClientService,
    @Inject(HTTPSERVICESETTINGS) private httpServiceSettings: any
  ) {}

  /**
   * Construct a complete url and post request
   * @param service
   * @param method
   * @param request
   * @returns {Observable<any>}
   */
  public post(service: string, method: string, request: any): Observable<any> {
    console.log('httpServiceSettings', this.httpServiceSettings);
    return of({ name: 'test' });
  }

  private paramaterizeJson(data) {
    return Object.keys(data)
      .map(k => {
        let value = data[k];
        if (typeof value === 'object') {
          value = JSON.stringify(value);
        }
        return encodeURIComponent(k) + '=' + encodeURIComponent(value);
      })
      .join('&');
  }
}
