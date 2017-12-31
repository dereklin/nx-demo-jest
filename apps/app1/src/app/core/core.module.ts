import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpServiceModule } from '@nx-demo-jest/http-service';
import { TabNavModule } from '@nx-demo-jest/tab-nav';

import { environment } from '../../environments/environment';
import * as fromServices from '../services';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    TabNavModule,
    HttpServiceModule.register({ httpServiceSettings: environment.httpServiceSettings })
  ],
  declarations: [CoreComponent],
  providers: [...fromServices.services]
})
export class CoreModule {}
