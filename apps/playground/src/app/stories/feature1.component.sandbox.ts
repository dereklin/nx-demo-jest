import { sandboxOf } from 'angular-playground';
import { Feature1Component } from '../../../../app1/src/app/feature1/feature1.component';
import { Router, RouterModule } from '@angular/router';
import { Dummy1Service } from '@nx-demo-jest/dummy1-service';
import { RouterTestingModule } from '@angular/router/testing';


export const tabs = [
  { value: ``, display: 'Home' },
  { value: `f1`, display: 'Feature 1' },
  { value: `f2`, display: 'Feature 2' },
  { value: 'f3', display: 'Feature 3' }
];


export default sandboxOf(Feature1Component, {
  imports: [],
  providers: [
  ]
})
.add('with simple text', {
  template: `<app-feature1></app-feature1>`,
  context: {
  }
});