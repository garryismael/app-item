import { Validators } from '@angular/forms';
import { ModelFormControl } from './model.form';
import { ModelFormGroup } from './model.formGroup';

export class LoginFormGroup extends ModelFormGroup {
  constructor() {
    super({
      username: new ModelFormControl(
        'username',
        'username',
        '',
        Validators.compose([Validators.required])
      ),
      password: new ModelFormControl(
        'password',
        'password',
        '',
        Validators.compose([Validators.required])
      ),
    });
  }
}
