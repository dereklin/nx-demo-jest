import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { CoreModule } from './core/core.module';

// Importing CoreModule
const routes: Route[] = [];
@NgModule({
  imports: [RouterModule.forRoot(routes), CoreModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
