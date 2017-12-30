import { Observable } from 'rxjs/Observable';

export interface HttpService {
  post(service: string, method: string, request: any): Observable<any>;
}
