import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { ListItemFormGroup } from 'src/app/forms/listitems.form';
import { ItemList } from 'src/app/models/itemlist.model';
import { ItemlistsService } from 'src/app/services/itemlists.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class ItemListsCreateComponent implements OnInit {

  lists: ItemList = new ItemList();
  messages: string[] = [];
  formGroup: ListItemFormGroup = new ListItemFormGroup(this.lists);
  formSubmitted = false;
  constructor(
    private snackBar: MatSnackBar,
    private listService: ItemlistsService,
    private dialogRef: MatDialogRef<ItemListsCreateComponent>
  ) {}

  ngOnInit(): void {}

  submitForm(): void {
    this.formSubmitted = true;
    if (this.formGroup.valid) {
      Object.keys(this.formGroup.controls)
      .forEach(c => this.lists[c] = this.formGroup.controls[c].value);
      this.formSubmitted = false;
      this.listService.postListItems(this.lists)
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
