import { HttpClientModule } from '@angular/common/http';
import { HttpClientService } from './http-client.service';
import { SimpleHttpService } from './simple-http.service';
import { HTTPSERVICE, HTTPSERVICESETTINGS } from './http-service.tokens';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, HttpClientModule]
})
export class HttpServiceModule {
  public static register({httpServiceSettings}): ModuleWithProviders {
    return {
      ngModule: HttpServiceModule,
      providers: [
        { provide: HTTPSERVICESETTINGS, useValue: httpServiceSettings },
        { provide: HTTPSERVICE, useClass: SimpleHttpService },
        HttpClientService
      ]
    };
  }
}
