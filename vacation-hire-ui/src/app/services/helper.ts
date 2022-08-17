import {Page} from "../components/app/app.component";import {MatSnackBar} from "@angular/material/snack-bar";import {ReservationStatusType} from "../dtos/reservation";import {VehicleAvailabilityStatusType, VehicleBodyType, VehicleBrandType, VehicleFuelType} from "../dtos/vehicle";export const appUrl = 'https://localhost:5001';export function openSnackBar(snackBar: MatSnackBar, message: string, action: string, styleClass: string) {  snackBar.open(message, action, {verticalPosition: 'top', panelClass: [styleClass], duration: 1000});}export function successSnackBar(snackBar: MatSnackBar) {  openSnackBar(snackBar, 'Data was successfully deleted', 'Success', 'snack-success');}export function errorSnackBar(snackBar: MatSnackBar) {  openSnackBar(snackBar, 'An error has occurred', 'Error', 'snack-error');}export interface IOption {  name: string;  value: string | ReservationStatusType | VehicleAvailabilityStatusType | VehicleBodyType | VehicleBrandType | VehicleFuelType;}export const pages: Page[] = [  {    name: 'Home',    link: '/home'  },  {    name: 'Customers',    link: '/customers'  },  {    name: 'Reservations',    link: '/reservations'  },  {    name: 'Vehicles',    link: '/vehicles'  },  {    name: 'Reception cards',    link: '/reception-cards'  }];