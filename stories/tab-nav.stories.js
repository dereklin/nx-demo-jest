import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// import { TabNavComponent } from '@nx-demo-jest/tab-nav';
import { TabNavComponent } from '../libs/tab-nav/src/tab-nav/tab-nav.component';

const COREROUTEBASESPACE = 'go/';

storiesOf('my-top-nav', module).add('basic', () => ({
  component: TabNavComponent,
  props: {
    tabs: [
    { value: ``, display: 'Home' },
    { value: `${COREROUTEBASESPACE}f1`, display: 'Feature 1' },
    { value: `${COREROUTEBASESPACE}f2`, display: 'Feature 2' },
    { value: 'f3', display: 'Feature 3' }
  ],
  styles: ['']
  }
}));
