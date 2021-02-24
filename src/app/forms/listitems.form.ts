import { Validators } from '@angular/forms';
import { IItemList } from '../models/itemlist.model';
import { ModelFormControl } from './model.form';
import { ModelFormGroup } from './model.formGroup';

export class ListItemFormGroup extends ModelFormGroup {
  constructor(itemLists?: IItemList) {
    super({
      name: new ModelFormControl(
        'name',
        'name',
        itemLists.name,
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
        itemLists,
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
        itemLists,
        Validators.max(1)
      )
    });
  }
}
