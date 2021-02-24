import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { IItem } from 'src/app/models/item.model';
import { ItemsService } from 'src/app/services/items.service';
import { ItemCreateComponent } from '../create/create.component';
import { ItemDeleteComponent } from '../delete/delete.component';
import { ItemPutComponent } from '../put/put.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ItemListComponent implements OnInit {
  search = '';
  displayedColumns: string[] = [
    'id',
    'name',
    'description',
    'price',
    'actions',
  ];
  items: IItem[] = [];
  dataSource: MatTableDataSource<IItem>;

  @ViewChild(MatSort, {
    static: true,
  })
  sort: MatSort;

  @ViewChild(MatPaginator, {
    static: true,
  })
  paginator: MatPaginator;

  constructor(
    private snackBar: MatSnackBar,
    private itemService: ItemsService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.refresh();
  }

  create(): void {
    this.dialog
      .open(ItemCreateComponent)
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

  editEntreprise(row: IItem): void {
    this.dialog.open(ItemPutComponent, {
      data: row,
    });
  }

  deleteEntreprise(row: IItem): void {
    this.dialog
      .open(ItemDeleteComponent)
      .afterClosed()
      // tslint:disable-next-line: deprecation
      .subscribe((result) => {
        if (result === '1') {
          // tslint:disable-next-line: deprecation
          this.itemService.deleteItem(row).subscribe(
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
    this.itemService.getAllItems()
      // tslint:disable-next-line: deprecation
      .subscribe((items) => {
        this.items = items;
        this.dataSource = new MatTableDataSource(items);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }
}
