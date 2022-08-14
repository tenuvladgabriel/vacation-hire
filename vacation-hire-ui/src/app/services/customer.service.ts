import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';
import {appUrl} from "./constants";
import {ICustomer} from "../dtos/customer";

@Injectable()
export class CustomerService {
  private baseUrl = `${appUrl}/customer`;

  constructor(private http: HttpClient) {
  }

  getDetails(id: string): Observable<ICustomer> {
    return this.http.get<ICustomer>(`${this.baseUrl}/${id}`);
  }

  getList(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(`${this.baseUrl}`);
  }

  insert(data: ICustomer) {
    return this.http.post(`${this.baseUrl}`, data);
  }

  update(id: string, data: ICustomer) {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
