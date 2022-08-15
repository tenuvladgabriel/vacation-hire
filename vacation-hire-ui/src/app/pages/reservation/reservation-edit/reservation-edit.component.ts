import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ReservationService} from "../../../services/reservation.service";
import {errorSnackBar, IOption, successSnackBar} from "../../../services/helper";
import {filter, map, Observable, switchMap} from "rxjs";
import {CustomerService} from "../../../services/customer.service";
import {VehicleService} from "../../../services/vehicle.service";

@Component({
  selector: 'app-reservation-edit',
  templateUrl: './reservation-edit.component.html',
  styleUrls: ['./reservation-edit.component.scss']
})
export class ReservationEditComponent implements OnInit {

  form: FormGroup;
  reservationId: string | undefined;
  title = 'Reservation';
  statuses: IOption[] = [];
  customers: Observable<IOption[]> = new Observable<IOption[]>();
  vehicles: Observable<IOption[]> = new Observable<IOption[]>();

  constructor(private reservationService: ReservationService,
              private customerService: CustomerService,
              private vehicleService: VehicleService,
              private route: ActivatedRoute,
              private router: Router,
              private _snackBar: MatSnackBar,
              private formBuilder: FormBuilder) {
    this.form = this.createForm();
  }

  ngOnInit() {
    this.getVehicles();
    this.getCustomers();
    this.route.params.pipe(
      filter(params => !!params['id']),
      switchMap(params => {
        this.reservationId = params['id'];
        this.mapStatuses();
        return this.reservationService.getDetails(this.reservationId as string).pipe(
          map(reservation => {
            this.form.patchValue(reservation);
          })
        );
      })
    ).subscribe();
  }

  private mapStatuses() {
    this.statuses = [
      {name: 'Confirmed', value: 'Confirmed'},
      {name: 'Pending', value: 'Pending'},
      {name: 'Cancelled', value: 'Cancelled'}
    ];
  }

  private getCustomers() {
    this.customers = this.customerService.getList().pipe(map((customers) => {
      return customers.map(customer => {
        return {
          name: `${customer.firstName} ${customer.lastName}`,
          value: customer.id
        } as IOption;
      }) as IOption[];
    }));
  }

  private getVehicles() {
    this.vehicles = this.vehicleService.getList().pipe(map((vehicles) => {
      return vehicles.map(vehicle => {
        return {
          name: vehicle.name,
          value: vehicle.id
        } as IOption;
      }) as IOption[];
    }));
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      rentalStartDate: [null, Validators.required],
      rentalExpirationDate: [null, Validators.required],
      status: [null, [Validators.required]],
      customerId: [null, [Validators.required]],
      vehicleIds: [this.formBuilder.array([])]
    });
  }

  onSave() {
    if (this.form?.valid) {
      const model = this.form.value;
      const save = this.reservationId ? this.reservationService.update(this.reservationId, model) : this.reservationService.insert(model);
      save.subscribe({
        next: async () => {
          successSnackBar(this._snackBar);
          await this.goToReservationListAsync();
        },
        error: () => errorSnackBar(this._snackBar)
      });
    }
  }

  onDelete() {
    this.reservationService.delete(this.reservationId as string).subscribe({
      next: async () => {
        successSnackBar(this._snackBar);
        await this.goToReservationListAsync();
      },
      error: () => errorSnackBar(this._snackBar)
    });
  }

  async onCancelAsync() {
    await this.goToReservationListAsync();
  }

  async goToReservationListAsync() {
    await this.router.navigate(['reservations']);
  }
}
