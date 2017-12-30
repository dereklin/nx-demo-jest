import { HTTPSERVICESETTINGS } from './http-service.tokens';
import { HttpClientService } from './http-client.service';
import { HttpClientModule } from '@angular/common/http';
import { TestBed, inject } from '@angular/core/testing';

import { SimpleHttpService } from './simple-http.service';

describe('SimpleHttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SimpleHttpService,
        HttpClientService,
        { provide: HTTPSERVICESETTINGS, useValue: {} }
      ],
      imports: [HttpClientModule]
    });
  });

  it(
    'should be created',
    inject([SimpleHttpService], (service: SimpleHttpService) => {
      expect(service).toBeTruthy();
    })
  );
});
