import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ItemFormGroup } from 'src/app/forms/items.form';
import { IItem } from 'src/app/models/item.model';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-patch',
  templateUrl: './patch.component.html',
  styleUrls: ['./patch.component.css']
})
export class ItemPatchComponent implements OnInit  {
  title = 'Patch An Item';
  item: IItem;
  formGroup: ItemFormGroup;
  formSubmitted = false;
  constructor(
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<ItemPatchComponent>,
    private itemService: ItemsService) {}

  ngOnInit() {}

  submitForm(): void {
    this.formSubmitted = true;
    if (this.formGroup.valid) {
      Object.keys(this.formGroup.controls).forEach((c) => {
        this.item[c] = this.formGroup.controls[c].value;
      });
      this.formSubmitted = false;
      // tslint:disable-next-line: deprecation
      this.itemService.putItem(this.item).subscribe(
        (_) => {
          this.dialogRef.close();
          this.snackBar.open('Success', 'Ok', {
            duration: 2000
          });
        },
        (_) => {}
      );
    }
  }
}
