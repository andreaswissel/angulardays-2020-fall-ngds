import {moduleMetadata, storiesOf} from '@storybook/angular';
import {LoginComponent} from './login.component';
import {FormGroupModule} from '../form-group/form-group.module';
import {InputModule} from '../input/input.module';
import {ButtonModule} from '../button/button.module';
import { LoginService } from './login.service';
import { MockLoginService } from './mocks/mock-login.service';

storiesOf('Components | Login', module)
  .addDecorator(moduleMetadata({
    imports:  [FormGroupModule, InputModule, ButtonModule],
    providers: [{ provide: LoginService, useClass: MockLoginService }]
  }))
  .add('Default', () => ({
    component: LoginComponent,
  }));
