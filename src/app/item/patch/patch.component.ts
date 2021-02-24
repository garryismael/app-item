import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { ItemFormGroup } from 'src/app/forms/items.form';
import {  IItem, Item } from 'src/app/models/item.model';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-patch',
  templateUrl: './patch.component.html',
  styleUrls: ['./patch.component.css']
})
export class ItemPatchComponent implements OnInit  {
  messages: string[] = [];
  formGroup: ItemFormGroup = new ItemFormGroup(this.item);
  formSubmitted = false;
  constructor(
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public item: IItem,
    private dialogRef: MatDialogRef<ItemPatchComponent>,
    private itemService: ItemsService) {}

  ngOnInit() {}

  submitForm(): void {
    this.formSubmitted = true;
    if (this.formGroup.valid) {
      Object.keys(this.formGroup.controls).forEach((c) => {
        const value = this.formGroup.controls[c].value;
        this.item[c] = value ? value : '';
      });
      this.formSubmitted = false;
      // tslint:disable-next-line: deprecation
      this.itemService.patchItem(this.item).subscribe(
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
