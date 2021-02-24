import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemListComponent } from './item/list/list.component';
import { ItemCreateComponent } from './item/create/create.component';
import { ItemPatchComponent } from './item/patch/patch.component';
import { ItemPutComponent } from './item/put/put.component';
import { ItemDeleteComponent } from './item/delete/delete.component';
import { ItemListsListComponent } from './itemlists/list/list.component';
import { ItemListsPatchComponent } from './itemlists/patch/patch.component';
import { ItemListsPutComponent } from './itemlists/put/put.component';
import { ItemListsDeleteComponent } from './itemlists/delete/delete.component';
import { ItemListsCreateComponent } from './itemlists/create/create.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemCreateComponent,
    ItemPatchComponent,
    ItemPutComponent,
    ItemDeleteComponent,
    ItemListsCreateComponent,
    ItemListsPatchComponent,
    ItemListsPutComponent,
    ItemListsDeleteComponent,
    ItemListsCreateComponent,
    ItemListsListComponent,
    LoginComponent,
    LogoutComponent
  ],
  entryComponents: [
    ItemCreateComponent,
    ItemPatchComponent,
    ItemPutComponent,
    ItemDeleteComponent,
    ItemListsCreateComponent,
    ItemListsPatchComponent,
    ItemListsPutComponent,
    ItemListsDeleteComponent,
    ItemListsCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
