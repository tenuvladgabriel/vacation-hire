import {ICustomer} from "../dtos/customer";
import {HttpBaseService} from "./http-base.service";

export class CustomerService extends HttpBaseService<ICustomer> {
  url = 'customer';
}
