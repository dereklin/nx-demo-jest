import { CoreComponent } from './core.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Feature1Component } from '../feature1/feature1.component';
import { Feature2Component } from '../feature2/feature2.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      { path: '', redirectTo: 'f1', pathMatch: 'full' },
      { path: 'f1', component: Feature1Component },
      { path: 'f2', component: Feature2Component },
      {
        path: '**',
        loadChildren: '@nx-demo-jest/not-found/src/not-found.module#NotFoundModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
