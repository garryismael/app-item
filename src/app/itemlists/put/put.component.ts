import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { ListItemFormGroup } from 'src/app/forms/listitems.form';
import { ItemPatchComponent } from 'src/app/item/patch/patch.component';
import { IItemList } from 'src/app/models/itemlist.model';
import { ItemlistsService } from 'src/app/services/itemlists.service';

@Component({
  selector: 'app-put',
  templateUrl: './put.component.html',
  styleUrls: ['./put.component.css']
})
export class ItemListsPutComponent implements OnInit {
  messages: string[] = [];
  formGroup: ListItemFormGroup = new ListItemFormGroup(this.list);
  formSubmitted = false;
  constructor(
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public list: IItemList,
    private dialogRef: MatDialogRef<ItemPatchComponent>,
    private listService: ItemlistsService) {}

  ngOnInit() {}

  submitForm(): void {
    this.formSubmitted = true;
    if (this.formGroup.valid) {
      Object.keys(this.formGroup.controls).forEach((c) => {
        const value = this.formGroup.controls[c].value;
        this.list[c] = value ? value : '';
      });
      this.formSubmitted = false;
      // tslint:disable-next-line: deprecation
      this.listService.putAllListItems(this.list).subscribe(
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
