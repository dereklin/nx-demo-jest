import { Feature3Component } from '../feature3/feature3.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Feature1Component } from '../feature1/feature1.component';
import { Feature2Component } from '../feature2/feature2.component';
import { CoreComponent } from './core.component';

const routes: Routes = [
  // { path: 'f3', component: Feature3Component }, // having this here will make /f3 work
  {
    path: '',
    component: CoreComponent,
    children: [
      { path: '', redirectTo: 'f1', pathMatch: 'full' },
      { path: 'f1', component: Feature1Component },
      { path: 'f2', component: Feature2Component },
      { path: 'not-found', loadChildren: '@nx-demo-jest/not-found/src/not-found.module#NotFoundModule' },
      {
        path: '**',
        redirectTo: 'not-found',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
