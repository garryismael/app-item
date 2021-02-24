import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ItemListComponent } from './item/list/list.component';
import { ItemListsListComponent } from './itemlists/list/list.component';


const routes: Routes = [
  { path: 'item', component: ItemListComponent },
  { path: 'itemlists', component: ItemListsListComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/item', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
