import {Component, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {IOption} from "../../services/helper";

@Component({
  selector: 'app-mat-form-select',
  templateUrl: './mat-form-select.component.html',
  styleUrls: ['./mat-form-select.component.scss']
})
export class MatFormSelectComponent {
  @Input('form') form: FormGroup = new FormGroup({});
  @Input('display') display: boolean = true;
  @Input('propertyFormName') propertyFormName: string = '';
  @Input('labelName') labelName: string = '';
  @Input('data') data: IOption[] | null = [];
}
