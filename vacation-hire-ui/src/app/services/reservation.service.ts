import {HttpBaseService} from "./http-base.service";
import {IReservation} from "../dtos/reservation";
import {Observable} from "rxjs";
import {IOption} from "./helper";

export class ReservationService extends HttpBaseService<IReservation> {
  url = 'reservation';

  getConfirmedReservations(): Observable<IOption[]> {
    return this.http.get<IOption[]>(`${this.baseUrl}/${this.url}/confirmed`);
  }

  getTotalInvoice(id: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/${this.url}/${id}/total-invoice`);
  }
}
