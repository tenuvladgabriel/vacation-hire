import {HttpBaseService} from "./http-base.service";
import {IOption} from "./helper";
import {Observable} from "rxjs";

export class CurrencyService extends HttpBaseService<IOption> {
  url = 'currency';

  getConvertedPrice(amount: number, currencyForConvert: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/${this.url}/convert/${amount}/${currencyForConvert}`);
  }
}
