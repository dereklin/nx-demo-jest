import { Injectable } from '@angular/core';

@Injectable()
export class Dummy1Service {
    sayHello(name) {
        return `Hello ${name}`;
    }
}
