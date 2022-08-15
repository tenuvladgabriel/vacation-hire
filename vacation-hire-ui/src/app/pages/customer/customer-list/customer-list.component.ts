import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {ICustomer} from "../../../dtos/customer";
import {CustomerService} from "../../../services/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  data: Observable<ICustomer[]> | undefined;
  createUrl = 'customers/create';
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNumber', 'country'];

  constructor(private router: Router,
              private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.data = this.customerService.getList();
  }

  async goToCustomerEditUrlAsync(customer: ICustomer) {
    await this.router.navigate([`customers/edit/${customer.firstName}/${customer.id}`]);
  }

}
