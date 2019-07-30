import {withKnobs, text, select} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/angular';
import {InputComponent} from './input.component';

storiesOf('Components | Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => ({
    component: InputComponent,
    props: {
      label: text('Label', 'My Label'),
      placeholder: text('Placeholder', 'My Placeholder'),
      type: select('Type', ['text', 'password'], 'text')
    }
  }));
