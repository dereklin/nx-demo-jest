import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";

import { CoreModule } from "./core/core.module";
import { Feature3Component } from "./feature3/feature3.component";
import { Feature3Module } from "./feature3/feature3.module";

const routes: Route[] = [{ path: "f3", component: Feature3Component }];
@NgModule({
  imports: [RouterModule.forRoot(routes), CoreModule, Feature3Module],
  exports: [RouterModule]
})
export class AppRoutingModule {}
