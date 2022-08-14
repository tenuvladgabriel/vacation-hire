import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "../home-page/home-page.component";
import {CustomerListComponent} from "../customer/customer-list/customer-list.component";
import {CustomerEditComponent} from "../customer/customer-edit/customer-edit.component";

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'customers', component: CustomerListComponent},
  {path: 'customers/edit/:name/:id', component: CustomerEditComponent},
  {path: 'customers/create', component: CustomerEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
