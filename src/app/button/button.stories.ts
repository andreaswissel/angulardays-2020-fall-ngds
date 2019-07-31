import {storiesOf} from '@storybook/angular';
import {ButtonComponent} from './button.component';
import {withKnobs, text} from '@storybook/addon-knobs';

storiesOf('Components | Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    component: ButtonComponent,
    props: {
      label: text('Label', 'A different label')
    }
  }));
