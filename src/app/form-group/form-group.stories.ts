import {moduleMetadata, storiesOf} from '@storybook/angular';
import {FormGroupModule} from './form-group.module';
import {InputModule} from '../input/input.module';
import {withKnobs, text, number} from '@storybook/addon-knobs';

storiesOf('Components | FormGroup', module)
  .addDecorator(withKnobs)
  .addDecorator(moduleMetadata({
    imports: [FormGroupModule, InputModule]
  }))
  .add('Default', () => ({
    template: `
      <app-form-group [columns]="columns" [heading]="heading">
        <app-input label="Username"></app-input>
        <app-input label="Password" type="password"></app-input>
      </app-form-group>
    `,
    props: {
      heading: text('Heading', 'This is the heading'),
      columns: number('Columns', 2)
    }
  }));
