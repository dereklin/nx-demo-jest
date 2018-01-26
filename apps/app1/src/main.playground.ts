import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializePlayground, PlaygroundModule } from 'angular-playground';

initializePlayground('app-root');
platformBrowserDynamic().bootstrapModule(PlaygroundModule);
