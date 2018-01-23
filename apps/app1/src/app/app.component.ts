import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as log from 'loglevel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  private logger = log.getLogger('AppComponent');
  constructor() {}

  public ngOnInit() {
    this.logger.debug('test');
  }

  public sayHello = () => {
    return 'Hello';
  };
}
