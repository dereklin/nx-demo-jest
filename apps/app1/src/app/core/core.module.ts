import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TabNavModule } from '@nx-demo-jest/tab-nav';

import * as fromServices from '../services';
import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';

@NgModule({
  imports: [CommonModule, CoreRoutingModule, TabNavModule, HttpClientModule],
  declarations: [CoreComponent],
  providers: [...fromServices.services]
})
export class CoreModule {}
