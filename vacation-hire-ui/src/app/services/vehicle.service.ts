import {HttpBaseService} from "./http-base.service";
import {IVehicle} from "../dtos/vehicle";

export class VehicleService extends HttpBaseService<IVehicle> {
  url = 'vehicle';
}
