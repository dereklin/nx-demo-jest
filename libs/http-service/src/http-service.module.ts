import { HttpClientModule } from '@angular/common/http';
import { SimpleHttpService } from './simple-http.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientService } from '@nx-demo-jest/http-client-service';
import { HTTPSERVICESETTINGS, HTTPSERVICE } from '@nx-demo-jest/app-tokens';

@NgModule({
  imports: [CommonModule, HttpClientModule]
})
export class HttpServiceModule {
  public static register({ httpServiceSettings }): ModuleWithProviders {
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
