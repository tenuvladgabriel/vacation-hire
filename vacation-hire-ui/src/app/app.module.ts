import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HomePageComponent} from './home-page/home-page.component';
import {AppComponent} from "./components/app/app.component";
import {AppRoutingModule} from "./modules/app-routing.module";
import {MaterialModule} from "./modules/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {CustomerService} from "./services/customer.service";
import {HeaderComponent} from './components/header/header.component';
import {NoDataComponent} from './components/no-data/no-data.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CustomerListComponent,
    CustomerEditComponent,
    HeaderComponent,
    NoDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    CustomerService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
