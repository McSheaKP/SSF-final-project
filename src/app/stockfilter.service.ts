import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class StockfilterService {
constructor(private http: HttpClient) { }
    apiKey = "DA65TS7P9O57VGZH"
    exampleUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=demo"

 
    
    getData (){
    return this.http.get(this.exampleUrl);
   
   
  }
}
