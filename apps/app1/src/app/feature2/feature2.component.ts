import { Component, OnInit } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-feature2',
  templateUrl: './feature2.component.html',
  styleUrls: ['./feature2.component.css']
})
export class Feature2Component implements OnInit {
  public now;
  constructor() {
    this.now = DateTime.local();
  }

  public ngOnInit() {}
}
