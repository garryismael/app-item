import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { ItemCreateComponent } from 'src/app/item/create/create.component';
import { IItemList } from 'src/app/models/itemlist.model';
import { ItemlistsService } from 'src/app/services/itemlists.service';
import { ItemListsPatchComponent } from '../patch/patch.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ItemListsListComponent implements OnInit {
  search = '';
  displayedColumns: string[] = [
    'id',
    'name',
    'items',
    'total',
  ];
  items: IItemList[] = [];
  dataSource: MatTableDataSource<IItemList>;

  @ViewChild(MatSort, {
    static: true,
  })
  sort: MatSort;

  @ViewChild(MatPaginator, {
    static: true,
  })
  paginator: MatPaginator;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private itemListService: ItemlistsService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    if (!localStorage.getItem('id_item')) {
      this.router.navigate(['login']);
      return;
    }
    this.refresh();
  }

  create(): void {
    this.dialog
      .open(ItemListsListComponent)
      .afterClosed()
      // tslint:disable-next-line: deprecation
      .subscribe((_) => {
        this.refresh();
      });
  }

  applyFilter(): void {
    this.dataSource.filter = this.search.trim().toLowerCase();
  }

  removeFilter(): void {
    this.search = '';
    this.applyFilter();
  }

  edit(row: IItemList): void {
    this.dialog.open(ItemCreateComponent, {
      data: row,
    });
  }

  patch(row: IItemList): void {
    this.dialog.open(ItemListsPatchComponent, {
      data: row
    });
  }

  delete(row: IItemList): void {
    this.dialog
      .open(ItemListsListComponent)
      .afterClosed()
      // tslint:disable-next-line: deprecation
      .subscribe((result) => {
        if (result === '1') {
          // tslint:disable-next-line: deprecation
          this.itemListService.deleteListItems(row).subscribe(
            (_) => {
              this.refresh();
              this.snackBar.open('Success', 'Ok', {
                duration: 2000,
              });
            },
            (_) => {
              this.snackBar.open('Error, Try again', 'ok');
              this.refresh();
            }
          );
        }
      });
  }

  refresh(): void {
    this.itemListService.getAllListItems()
      // tslint:disable-next-line: deprecation
      .subscribe((items) => {
        this.items = items;
        this.dataSource = new MatTableDataSource(items);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }
}
