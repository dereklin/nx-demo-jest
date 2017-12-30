// This code is not tested and might cause errors
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class HttpClientService {
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json', Accept: 'application/json' });
    this.headers.append('Cache-control', 'no-cache');
    this.headers.append('Cache-control', 'no-store');
    this.headers.append('Expires', '0');
    this.headers.append('Pragma', 'no-cache');
  }

  public post(url, data): Observable<any> {
    return this.http
      .post(url, data, { headers: this.headers })
      .pipe(map(this.extractData), catchError(this.handleError));
  }

  private extractData(res: Response) {
    return res;
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      try {
        errMsg = `${error.status} - ${error.statusText || ''}`;
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${errMsg} ${err}`;
      } catch (e2) {
        if (error['_body']) {
          errMsg = `${errMsg} ${error['_body']}`;
        }
      }
    } else {
      errMsg = error ? (error.message ? error.message : error.toString()) : '';
    }
    console.error(errMsg);
    return of(undefined);
  }
}
