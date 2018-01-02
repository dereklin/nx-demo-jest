import { Tab } from '../models/tab.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'my-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.scss']
})
export class TabNavComponent implements OnInit {
  @Input() public tabs: Tab[];

  constructor() {}

  ngOnInit() {}
}
