import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature1',
  templateUrl: './feature1.component.html',
  styleUrls: ['./feature1.component.css']
})
export class Feature1Component implements OnInit {
  private dummy = {
    type1: { dummyPropertyFunction: undefined },
    type2: { dummyPropertyFunction: undefined },
    type3: { dummyPropertyFunction: undefined },
    type4: { dummyPropertyFunction: undefined },
    type5: { dummyPropertyFunction: undefined },
    type6: { dummyPropertyFunction: undefined },
    type7: { dummyPropertyFunction: undefined },
    type8: { dummyPropertyFunction: undefined },
  };

  constructor() {
    this.dummy.type1.dummyPropertyFunction
      = this.dummy.type2.dummyPropertyFunction
      = this.dummy.type3.dummyPropertyFunction
      = this.dummy.type4.dummyPropertyFunction
      = this.dummy.type5.dummyPropertyFunction
      = this.dummy.type6.dummyPropertyFunction
      = this.dummy.type7.dummyPropertyFunction
      = this.dummy.type8.dummyPropertyFunction
      = () => {
        return 'dummy';
      };
  }

  public ngOnInit() { }
}
