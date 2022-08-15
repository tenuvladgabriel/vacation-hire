import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-mat-form-input',
  templateUrl: './mat-form-input.component.html',
  styleUrls: ['./mat-form-input.component.scss']
})
export class MatFormInputComponent {
  @Input('form') form: FormGroup = new FormGroup({});
  @Input('propertyFormName') propertyFormName: string = '';
  @Input('labelName') labelName: string = '';
  @Input('inputType') inputType: string = 'text';
}
