import { Component } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ItemFormGroup } from 'src/app/forms/items.form';
import { ItemsService } from 'src/app/services/items.service';
import { Item } from 'src/app/models/item.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class ItemCreateComponent {
  item: Item = new Item();
  messages: string[] = [];
  formGroup: ItemFormGroup = new ItemFormGroup(this.item);
  formSubmitted = false;
  constructor(
    private snackBar: MatSnackBar,
    private itemService: ItemsService,
    private dialogRef: MatDialogRef<ItemCreateComponent>
  ) {
  }

  submitForm(): void {
    this.formSubmitted = true;
    if (this.formGroup.valid) {
      Object.keys(this.formGroup.controls)
      .forEach(c => this.item[c] = this.formGroup.controls[c].value);
      this.formSubmitted = false;
      this.itemService.postItem(this.item)
        // tslint:disable-next-line: deprecation
        .subscribe((result) => {
          this.dialogRef.close(result);
          this.snackBar.open('Success', 'Ok', {
            duration: 2000
          });
        }, (errors) => {
          console.log(errors);
        });
    }
  }
}
