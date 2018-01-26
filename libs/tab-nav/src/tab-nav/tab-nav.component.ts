import { Tab } from '../models/tab.model';
import { Component, Input, OnInit } from '@angular/core';
import { Dummy1Service } from '@nx-demo-jest/dummy1-service';
// tslint:disable-next-line
// import { Dummy1Service } from '../../../../libs/dummy1-service'

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.scss']
})
export class TabNavComponent implements OnInit {
  @Input() public tabs: Tab[];

  constructor(private dummy1Service: Dummy1Service) {}

  ngOnInit() {
    console.log( this.dummy1Service.sayHello('test') );
  }
}
