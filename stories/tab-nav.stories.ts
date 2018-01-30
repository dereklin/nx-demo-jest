import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { RouterModule } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TabNavComponent } from '@nx-demo-jest/tab-nav';
import { Dummy1Service } from '@nx-demo-jest/dummy1-service';

const COREROUTEBASESPACE = 'go/';

storiesOf('Test|libs/TabNavComponent', module).add('basic', () => ({
  moduleMetadata: {
    imports: [],
    schemas: [NO_ERRORS_SCHEMA],
    declarations: [],
    providers: [
      Dummy1Service
    ]
  },
  component: TabNavComponent,
  props: {
    tabs: [
      { value: ``, display: 'Home' },
      { value: `${COREROUTEBASESPACE}f1`, display: 'Feature 1' },
      { value: `${COREROUTEBASESPACE}f2`, display: 'Feature 2' },
      { value: 'f3', display: 'Feature 3' }
    ]
  }
}));
