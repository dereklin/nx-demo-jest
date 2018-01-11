import { parseHostPath } from '@nx-demo-jest/stringutils';
import { APP_BASE_HREF } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

export const myBaseHref = parseHostPath(window.location.pathname);

export const p = isPlatformBrowser(this.platformId) ? [
    { provide: APP_BASE_HREF, useValue: myBaseHref }
] : [];

export const providers: any[] = [];

export const browserProviders: any[] = [
    { provide: APP_BASE_HREF, useValue: myBaseHref }
];
