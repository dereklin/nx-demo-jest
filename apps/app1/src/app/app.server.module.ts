import { AppShellComponent } from './app-shell/app-shell.component';
import { RouterModule, Routes } from '@angular/router';
import { AppShellModule } from './app-shell/app-shell.module';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';


@NgModule({
  imports: [AppModule, ServerModule, AppShellModule, ModuleMapLoaderModule],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
