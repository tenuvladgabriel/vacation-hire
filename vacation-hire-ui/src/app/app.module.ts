import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HomePageComponent} from './home-page/home-page.component';
import {AppNavbarComponent} from './app-navbar/app-navbar.component';
import {AppComponent} from "./components/app/app.component";
import {AppRoutingModule} from "./modules/app-routing.module";
import {MaterialModule} from "./modules/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {CustomerService} from "./services/customer.service";

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    HomePageComponent,
    CustomerListComponent,
    CustomerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
