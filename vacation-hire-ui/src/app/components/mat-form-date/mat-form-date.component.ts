import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-mat-form-date',
  templateUrl: './mat-form-date.component.html',
  styleUrls: ['./mat-form-date.component.scss']
})
export class MatFormDateComponent {
  @Input('form') form: FormGroup = new FormGroup({});
  @Input('propertyFormName') propertyFormName: string = '';
  @Input('labelName') labelName: string = '';
}
