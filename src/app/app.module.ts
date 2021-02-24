import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { AuthService } from './services/auth.service';
import { ItemlistsService } from './services/itemlists.service';
import { TokenInterceptor } from './guards/interceptor';


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
  ],
  entryComponents: [
    ItemCreateComponent,
    ItemListsPatchComponent,
    ItemPutComponent,
    ItemDeleteComponent,
    ItemListsCreateComponent,
    ItemListsPatchComponent,
    ItemListsPutComponent,
    ItemListsDeleteComponent,
    ItemListsCreateComponent,
    ItemPatchComponent
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
  providers: [
    AuthService,
    ItemlistsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
