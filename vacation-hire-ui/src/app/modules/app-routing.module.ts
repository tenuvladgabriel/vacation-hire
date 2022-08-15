import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "../pages/home-page/home-page.component";
import {CustomerListComponent} from "../pages/customer/customer-list/customer-list.component";
import {CustomerEditComponent} from "../pages/customer/customer-edit/customer-edit.component";
import {ReservationListComponent} from "../pages/reservation/reservation-list/reservation-list.component";
import {ReservationEditComponent} from "../pages/reservation/reservation-edit/reservation-edit.component";
import {VehicleListComponent} from "../pages/vehicle/vehicle-list/vehicle-list.component";
import {VehicleEditComponent} from "../pages/vehicle/vehicle-edit/vehicle-edit.component";

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'customers', component: CustomerListComponent},
  {path: 'customers/edit/:name/:id', component: CustomerEditComponent},
  {path: 'customers/create', component: CustomerEditComponent},
  {path: 'reservations', component: ReservationListComponent},
  {path: 'reservations/create', component: ReservationEditComponent},
  {path: 'reservations/edit/:id', component: ReservationEditComponent},
  {path: 'vehicles', component: VehicleListComponent},
  {path: 'vehicles/edit/:name/:id', component: VehicleEditComponent},
  {path: 'vehicles/create', component: VehicleEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
