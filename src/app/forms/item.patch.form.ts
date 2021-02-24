import { Validators } from '@angular/forms';
import { IItem } from '../models/item.model';
import { ModelFormControl } from './model.form';
import { ModelFormGroup } from './model.formGroup';

export class ItemPatchFormGroup extends ModelFormGroup {
  constructor(item: IItem) {
    super({
      name: new ModelFormControl(
        'name',
        'name',
        item.name,
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(50),
        ])
      ),
      description: new ModelFormControl(
        'description',
        'description',
        item.description,
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(50),
        ])
      ),
      price: new ModelFormControl(
        'price',
        'price',
        item.price,
        Validators.compose([
          Validators.min(1)
        ])
      ),
    });
  }
}
