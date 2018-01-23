import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { renderModuleFactory } from '@angular/platform-server';
import { enableProdMode } from '@angular/core';

import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

// this is the hack to get the window object for pre-rendering
import * as domino from 'domino';
// import * as fs from 'fs';
// import * as path from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express server
const app = express();

const PORT = process.env.PORT || 4001;
const DIST_FOLDER = join(process.cwd(), './dist/apps/app1');

// Our index.html we'll use as our template
const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();

const win = domino.createWindow(template);
(global as any)['window'] = win;
(global as any)['document'] = win.document;
(global as any)['navigator'] = win.navigator;

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
// tslint:disable-next-line
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('../../dist/apps/app1/server/main.bundle');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';
import { APP_BASE_HREF } from '@angular/common';

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine(
  'html',
  ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [provideModuleMap(LAZY_MODULE_MAP), { provide: APP_BASE_HREF, useValue: '/app1/browser/' }]
  })
);

app.set('view engine', 'html');
app.set('views', join(DIST_FOLDER, 'browser'));

/* - Example Express Rest API endpoints -
  app.get('/api/**', (req, res) => { });
*/

// Server static files from /browser
app.get(
  '*.*',
  express.static(join(DIST_FOLDER, 'browser'), {
    maxAge: '1y'
  })
);

// ALl regular routes use the Universal engine
app.get('*', (req, res) => {
  res.render('index', { req });
});

// Start up the Node server
app.listen(PORT, () => {
  console.log(`Node Express server listening on http://localhost:${PORT}`);
});
