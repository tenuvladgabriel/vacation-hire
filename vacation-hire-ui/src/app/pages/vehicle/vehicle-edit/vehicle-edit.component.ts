import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {filter, map, switchMap} from "rxjs";
import {errorSnackBar, successSnackBar} from "../../../services/helper";
import {VehicleService} from "../../../services/vehicle.service";
import {availabilityStatuses, bodyTypes, brandTypes, fuelTypes} from "../helper";

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss']
})
export class VehicleEditComponent implements OnInit {

  form: FormGroup;
  vehicleId: string | undefined;
  title = 'Vehicles';
  bodyTypes = bodyTypes;
  availabilityStatuses = availabilityStatuses;
  brandTypes = brandTypes;
  fuelTypes = fuelTypes;

  constructor(private vehicleService: VehicleService,
              private route: ActivatedRoute,
              private router: Router,
              private _snackBar: MatSnackBar,
              private formBuilder: FormBuilder) {
    this.form = this.createForm();
  }

  ngOnInit() {
    this.route.params.pipe(
      filter(params => !!params['id']),
      switchMap(params => {
        this.vehicleId = params['id'];
        this.title = `Vehicles - ${atob(params['name'])}`;
        return this.vehicleService.getDetails(this.vehicleId as string).pipe(
          map(vehicle => {
            this.form.patchValue(vehicle);
          })
        )
      })
    ).subscribe();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      name: [null, Validators.required],
      color: [null, Validators.required],
      numberOfMiles: [null, [Validators.required]],
      price: [null, Validators.required],
      bodyType: [null, Validators.required],
      brandType: [null, Validators.required],
      fuelType: [null, Validators.required],
      availabilityStatus: ['Disposable']
    });
  }

  onSave() {
    if (this.form?.valid) {
      const model = this.form.value;
      const save = this.vehicleId ? this.vehicleService.update(this.vehicleId, model) : this.vehicleService.insert(model);
      save.subscribe({
        next: async () => {
          successSnackBar(this._snackBar);
          await this.goToCustomerListAsync();
        },
        error: () => errorSnackBar(this._snackBar)
      });
    }
  }

  onDelete() {
    this.vehicleService.delete(this.vehicleId as string).subscribe({
      next: async () => {
        successSnackBar(this._snackBar);
        await this.goToCustomerListAsync();
      },
      error: () => errorSnackBar(this._snackBar)
    });
  }

  async onCancelAsync() {
    await this.goToCustomerListAsync();
  }

  async goToCustomerListAsync() {
    await this.router.navigate(['vehicles']);
  }
}
