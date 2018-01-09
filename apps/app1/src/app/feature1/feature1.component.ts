import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.css']
})
export class Feature1Component implements OnInit {
  public name: string;

  constructor() {
    this.name = 'test';
  }

  ngOnInit() {}
}
