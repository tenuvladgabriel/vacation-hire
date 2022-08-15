import {HttpBaseService} from "./http-base.service";
import {IReservation} from "../dtos/reservation";

export class ReservationService extends HttpBaseService<IReservation> {
  url = 'reservation'
}
