import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

// this is the hack to get the window object for pre-rendering
import * as domino from 'domino';
import * as fs from 'fs';
import * as path from 'path';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core/core.component';
import { AppShellComponent } from './app-shell/app-shell.component';
const template = fs.readFileSync(path.join(__dirname, '.', '../../../dist/apps/app1', 'index.html')).toString();
const win = domino.createWindow(template);
(<any>global)['window'] = win;
(<any>global)['document'] = win.document;
(<any>global)['navigator'] = win.navigator;

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule {}
