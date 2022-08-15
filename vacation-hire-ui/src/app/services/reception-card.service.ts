import {HttpBaseService} from "./http-base.service";
import {IReceptionCard} from "../dtos/reception-card";

export class ReceptionCardService extends HttpBaseService<IReceptionCard> {
  url = 'receptionCard';
}
