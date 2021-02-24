import { FormGroup } from '@angular/forms';
import { ModelFormControl } from './model.form';

export class ModelFormGroup extends FormGroup {
  constructor(formGroup: any) {
    super(formGroup);
  }

  get modelControls(): ModelFormControl[] {
    return Object.keys(this.controls).map(
      (k) => this.controls[k] as ModelFormControl
    );
  }

  get validationMessages(): string[] {
    return (this.controls.name as ModelFormControl).validationMessages;
  }

  get formValidationMessages(): string[] {
    const messages: string[] = [];
    Object.values(this.controls).forEach((c) =>
      messages.push(...(c as ModelFormControl).validationMessages)
    );
    return messages;
  }
}
