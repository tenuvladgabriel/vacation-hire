import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {appUrl} from "./constants";
import {ICustomer} from "../dtos/customer";

@Injectable()
export class CustomerService {
  private baseUrl = 'customer';

  constructor(private http: HttpClient) {
  }

  getDetails(id: string): Observable<ICustomer> {
    return this.http.get<ICustomer>(`${appUrl}/${this.baseUrl}/${id}`);
  }

  getList(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(`${appUrl}/${this.baseUrl}`);
  }
}
