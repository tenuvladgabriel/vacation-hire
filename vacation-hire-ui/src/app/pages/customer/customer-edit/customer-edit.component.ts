import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {filter, map, switchMap} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";
import {CustomerService} from "../../../services/customer.service";
import {errorSnackBar, successSnackBar} from "../../../services/helper";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  form: FormGroup;
  customerId: string | undefined;
  title = 'Customers';

  constructor(private customerService: CustomerService,
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
        this.customerId = params['id'];
        this.title = `Customers - ${params['name']}`;
        return this.customerService.getDetails(this.customerId as string).pipe(
          map(customer => {
            this.form.patchValue(customer);
          })
        )
      })
    ).subscribe();
  }

  private createForm(): FormGroup {
    const emailRegex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return this.formBuilder.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(emailRegex)]],
      phoneNumber: [null, Validators.required],
      country: [null, Validators.required]
    });
  }

  onSave() {
    if (this.form?.valid) {
      const model = this.form.value;
      const save = this.customerId ? this.customerService.update(this.customerId, model) : this.customerService.insert(model);
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
    this.customerService.delete(this.customerId as string).subscribe({
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
    await this.router.navigate(['customers']);
  }
}
