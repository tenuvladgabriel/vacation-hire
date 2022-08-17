import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ReceptionCardService} from "../../../services/reception-card.service";
import {debounceTime, distinctUntilChanged, filter, map, Observable, startWith, switchMap} from "rxjs";
import {errorSnackBar, IOption, successSnackBar} from "../../../services/helper";
import {ReservationService} from "../../../services/reservation.service";
import {CurrencyService} from "../../../services/currency.service";

@Component({
  selector: 'app-reception-card-edit',
  templateUrl: './reception-card-edit.component.html',
  styleUrls: ['./reception-card-edit.component.scss']
})
export class ReceptionCardEditComponent implements OnInit {

  form: FormGroup;
  receptionCardId: string | undefined;
  title = 'Reception card';
  reservations: Observable<IOption[]> = new Observable<IOption[]>();
  objectConditions: IOption[] = [];
  currencies: Observable<IOption[]> = new Observable<IOption[]>();
  totalCost: Observable<number> = new Observable<number>();
  objectTypes: IOption[] = [
    {
      name: 'Vehicle',
      value: 'Vehicle'
    }
  ];

  constructor(private receptionCardService: ReceptionCardService,
              private reservationService: ReservationService,
              private currencyService: CurrencyService,
              private route: ActivatedRoute,
              private router: Router,
              private _snackBar: MatSnackBar,
              private formBuilder: FormBuilder) {
    this.form = this.createForm();
  }

  ngOnInit() {
    this.getCurrencyList();
    this.getReservations();
    this.mapObjectConditionTypes();
    this.onCurrencyValueChange();
    this.route.params.pipe(
      filter(params => !!params['id']),
      switchMap(params => {
        this.receptionCardId = params['id'];
        return this.mapData();
      })
    ).subscribe();
  }

  mapData(): Observable<void> {
    return this.receptionCardService.getDetails(this.receptionCardId as string).pipe(
      map(receptionCard => {
        this.form.patchValue(receptionCard);
      })
    );
  }

  getReservations() {
    this.reservations = this.reservationService.getConfirmedReservations();
  }

  getCurrencyList() {
    this.currencies = this.currencyService.getList();
  }

  onCurrencyValueChange() {
    this.totalCost = this.form.get('currency')?.valueChanges.pipe(
      startWith(false),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(_ => this.reservationService.getTotalInvoice(this.form.get('reservationId')?.value)),
      switchMap((amount: number) => this.currencyService.getConvertedPrice(amount, this.form.get('currency')?.value))
    ) as Observable<number>;
    this.setTotalCostForm();
  }

  setTotalCostForm() {
    this.totalCost.subscribe(val => this.form.get('totalInvoice')?.setValue(val));
  }

  mapObjectConditionTypes() {
    this.objectConditions = [
      {
        name: 'Very good',
        value: 'VeryGood'
      },
      {
        name: 'Degraded',
        value: 'Degraded'
      },
      {
        name: 'Destroyed',
        value: 'Destroyed'
      }
    ];
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      objectCondition: [null, Validators.required],
      objectType: [null, Validators.required],
      occuredAt: [null, [Validators.required]],
      fuelLevel: [null, [Validators.required]],
      reservationId: [null, [Validators.required]],
      currency: [null, [Validators.required]],
      totalInvoice: [null, [Validators.required]]
    });
  }

  onSave() {
    if (this.form?.valid) {
      const model = this.form.value;
      const save = this.receptionCardId ? this.receptionCardService.update(this.receptionCardId, model) : this.receptionCardService.insert(model);
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
    this.receptionCardService.delete(this.receptionCardId as string).subscribe({
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
    await this.router.navigate(['reception-cards']);
  }

}
