import {HttpBaseService} from "./http-base.service";
import {IVehicle} from "../dtos/vehicle";
import {Observable} from "rxjs";
import {IOption} from "./helper";

export class VehicleService extends HttpBaseService<IVehicle> {
  url = 'vehicle';

  getDisposableVehicles(): Observable<IOption[]> {
    return this.http.get<IOption[]>(`${this.baseUrl}/${this.url}/disposable`);
  }
}
