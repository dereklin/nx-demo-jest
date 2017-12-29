import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { TabNavModule } from '@nx-demo-jest/tab-nav';
import { Feature1Module } from '../feature1/feature1.module';
import { Feature2Module } from '../feature2/feature2.module';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    TabNavModule,
    Feature1Module,
    Feature2Module
  ],
  declarations: [CoreComponent]
})
export class CoreModule {}
