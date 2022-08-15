import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from "./components/app/app.component";
import {AppRoutingModule} from "./modules/app-routing.module";
import {MaterialModule} from "./modules/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {CustomerService} from "./services/customer.service";
import {HeaderComponent} from './components/header/header.component';
import {NoDataComponent} from './components/no-data/no-data.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import {ReceptionCardService} from "./services/reception-card.service";
import {ReservationService} from "./services/reservation.service";
import {VehicleService} from "./services/vehicle.service";
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {CustomerListComponent} from "./pages/customer/customer-list/customer-list.component";
import {CustomerEditComponent} from "./pages/customer/customer-edit/customer-edit.component";
import { ReservationEditComponent } from './pages/reservation/reservation-edit/reservation-edit.component';
import { ReservationListComponent } from './pages/reservation/reservation-list/reservation-list.component';
import { VehicleEditComponent } from './pages/vehicle/vehicle-edit/vehicle-edit.component';
import { VehicleListComponent } from './pages/vehicle/vehicle-list/vehicle-list.component';
import { MatFormInputComponent } from './components/mat-form-input/mat-form-input.component';
import { MatFormDateComponent } from './components/mat-form-date/mat-form-date.component';
import { MatFormSelectComponent } from './components/mat-form-select/mat-form-select.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CustomerListComponent,
    CustomerEditComponent,
    HeaderComponent,
    NoDataComponent,
    ReservationEditComponent,
    ReservationListComponent,
    VehicleEditComponent,
    VehicleListComponent,
    MatFormInputComponent,
    MatFormDateComponent,
    MatFormSelectComponent
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
    ReservationService,
    ReceptionCardService,
    VehicleService,
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
