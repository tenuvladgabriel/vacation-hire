import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {appUrl} from "./helper";

@Injectable()
export abstract class HttpBaseService<TEntity> {
  abstract url: string;
  protected baseUrl: string;
  protected http: HttpClient;

  constructor(@Inject(HttpClient) http: any) {
    this.http = http;
    this.baseUrl = appUrl;
  }

  getDetails(id: string): Observable<TEntity> {
    return this.http.get<TEntity>(`${this.baseUrl}/${this.url}/${id}`);
  }

  getList(): Observable<TEntity[]> {
    return this.http.get<TEntity[]>(`${this.baseUrl}/${this.url}`);
  }

  insert(data: TEntity) {
    return this.http.post(`${this.baseUrl}/${this.url}`, data);
  }

  update(id: string, data: TEntity) {
    return this.http.put(`${this.baseUrl}/${this.url}/${id}`, data);
  }

  delete(id: string) {
    return this.http.delete(`${this.baseUrl}/${this.url}/${id}`);
  }
}
