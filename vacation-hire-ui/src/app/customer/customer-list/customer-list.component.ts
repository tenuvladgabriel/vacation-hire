import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {Observable} from "rxjs";
import {ICustomer} from "../../dtos/customer";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  data: Observable<ICustomer[]> | undefined;

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
    this.data = this.customerService.getList();
  }

}
