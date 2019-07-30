import {storiesOf} from '@storybook/angular';
import {ButtonComponent} from './button.component';

storiesOf('Components | Button', module)
  .add('Default', () => ({
    component: ButtonComponent,
    props: {
      label: 'Submit'
    }
  }));
