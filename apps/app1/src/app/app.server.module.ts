import { AppShellComponent } from './app-shell/app-shell.component';
import { RouterModule, Routes } from '@angular/router';
import { AppShellModule } from './app-shell/app-shell.module';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';

// this is the hack to get the window object for pre-rendering
import * as domino from 'domino';
import * as fs from 'fs';
import * as path from 'path';
const template = fs.readFileSync(path.join(process.cwd(), '.', 'browser', 'index.html')).toString();
const win = domino.createWindow(template);
(global as any)['window'] = win;
(global as any)['document'] = win.document;
(global as any)['navigator'] = win.navigator;

@NgModule({
  imports: [AppModule, ServerModule, AppShellModule, ModuleMapLoaderModule],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
