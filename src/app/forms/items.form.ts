import { Validators } from '@angular/forms';
import { IItem } from '../models/item.model';
import { ModelFormControl } from './model.form';
import { ModelFormGroup } from './model.formGroup';

export class ItemFormGroup extends ModelFormGroup {
  constructor(item: IItem) {
    super({
      name: new ModelFormControl(
        'name',
        'name',
        item.name,
        Validators.compose(
          [
            Validators.required,
            Validators.maxLength(50),
           Validators.minLength(3)
          ]
        )
      ),
      description: new ModelFormControl(
        'description',
        'description',
        item.description,
        Validators.compose(
          [
            Validators.required,
            Validators.minLength(50),
            Validators.maxLength(5)
          ]
        )
      ),
      price: new ModelFormControl(
        'price',
        'price',
        item.price,
        Validators.max(1)
      )
    });
  }
}
