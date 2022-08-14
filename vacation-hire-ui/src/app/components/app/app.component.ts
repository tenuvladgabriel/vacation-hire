import {Component} from '@angular/core';
import {pages} from "../../services/constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages = pages;
}

export interface Page {
  link: string;
  name: string;
}
