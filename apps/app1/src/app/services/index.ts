import { environment } from '../../environments/environment';
import { SessionResolver } from '@nx-demo-jest/session-resolver';
import { HttpClientService } from '@nx-demo-jest/http-client-service';
import { HTTPSERVICE, HTTPSERVICESETTINGS } from '@nx-demo-jest/app-tokens';
import { SimpleHttpService } from '@nx-demo-jest/simple-http-service';

export * from '@nx-demo-jest/session-resolver';
export * from '@nx-demo-jest/http-client-service';

export const services: any[] = [
  SessionResolver,
  HttpClientService,
  {
    provide: HTTPSERVICE,
    useClass: SimpleHttpService
  },
  { provide: HTTPSERVICESETTINGS, useValue: environment.httpServiceSettings }
];
