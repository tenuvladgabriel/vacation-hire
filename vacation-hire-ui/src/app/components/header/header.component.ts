import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input('title') title: string | undefined;
  @Input('hasCreateButton') hasCreateButton: boolean = false;
  @Input('createButtonUrl') createButtonUrl: string | undefined;

  constructor(private router: Router) {
  }

  async goToCreateUrl() {
    await this.router.navigate([this.createButtonUrl]);
  }
}
