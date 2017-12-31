import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { CoreModule } from "./core/core.module";
import { Feature3Component } from "./feature3/feature3.component";
import { Feature3Module } from "./feature3/feature3.module";

import { COREROUTEBASESPACE } from './core/core-routing.constants';

const routes: Route[] = [
  { path: '', redirectTo: `${COREROUTEBASESPACE}f1`, pathMatch: 'full'},
  { path: "f3", component: Feature3Component },
  { path: 'not-found', loadChildren: '@nx-demo-jest/not-found/src/not-found.module#NotFoundModule' },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes), CoreModule, Feature3Module],
  exports: [RouterModule]
})
export class AppRoutingModule {}
