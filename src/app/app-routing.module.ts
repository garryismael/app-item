import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item/list/list.component';
import { ItemListsListComponent } from './itemlists/list/list.component';


const routes: Routes = [
  { path: 'item', component: ItemListComponent },
  { path: 'itemlists', component: ItemListsListComponent },
  { path: '', redirectTo: '/item', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
