import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockquoteService {
  
  constructor(private _http: HttpClient) { }
 
  configUrl = "https://finnhub.io/api/v1/";
  token = "&token=bu4f8kn48v6uehqi3cqg";

  
  getQuoteData(symbol: string){
    return this._http.get(this.configUrl + "quote?symbol=" + symbol + this.token);
  }

getCompanyName(search: string){
  return this._http.get(this.configUrl + "search?q=" + search + this.token);

}
getSentiment(symbol: string, from: string, to: string){
  return this._http.get(this.configUrl + "stock/insider-sentiment?symbol=" + symbol + "&from=" + from + "&to=" + to + this.token )
}
}