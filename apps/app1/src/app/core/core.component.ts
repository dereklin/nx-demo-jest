import { Component, OnInit } from '@angular/core';
import { Tab } from '@nx-demo-jest/tab-nav';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit {
  public tabs: Tab[];

  constructor() {
    this.tabs = [
      { value: 'f1', display: 'Feature 1' },
      { value: 'f2', display: 'Feature 2' },
      { value: 'f3', display: 'Feature 3' }
    ];
  }

  ngOnInit() {}
}
