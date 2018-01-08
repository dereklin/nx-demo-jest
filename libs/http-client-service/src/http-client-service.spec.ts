import { HttpClient } from '@angular/common/http';
import { HttpClientService } from './http-client-service';

describe('HttpClientService', () => {
  it('should work', () => {
    expect(new HttpClientService({} as HttpClient)).toBeDefined();
  });
});
