import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { ItemFormGroup } from 'src/app/forms/items.form';
import { IItem } from 'src/app/models/item.model';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class ItemPutComponent implements OnInit {
  title = 'Edit An Item';
  formGroup: ItemFormGroup;
  formSubmitted = false;
  constructor(
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public item: IItem,
    private dialogRef: MatDialogRef<ItemPutComponent>,
    private itemService: ItemsService) {
      this.formGroup = new ItemFormGroup(item);
  }

  ngOnInit() {
  }

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
