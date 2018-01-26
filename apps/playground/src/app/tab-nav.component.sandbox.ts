import { sandboxOf } from 'angular-playground';
import { TabNavComponent } from '@nx-demo-jest/tab-nav';
import { Router, RouterModule } from '@angular/router';
import { Dummy1Service } from '@nx-demo-jest/dummy1-service';
import { RouterTestingModule } from '@angular/router/testing';


export const tabs = [
  { value: ``, display: 'Home' },
  { value: `f1`, display: 'Feature 1' },
  { value: `f2`, display: 'Feature 2' },
  { value: 'f3', display: 'Feature 3' }
];


export default sandboxOf(TabNavComponent, {
  imports: [RouterModule, RouterTestingModule],
  providers: [
    Dummy1Service,
  ]
})
.add('basic', {
  template: `<app-tab-nav [tabs]="tabs"></app-tab-nav>`,
  context: {
    tabs: [
      { value: ``, display: 'Home' },
      { value: `f1`, display: 'Feature 1' },
      { value: `f2`, display: 'Feature 2' },
      { value: 'f3', display: 'Feature 3' }
          
    ]
  },
  styles: [`
    app-tab-nav {
      background-color: yellow;
      font-size: 25px;
    }
  `]
});