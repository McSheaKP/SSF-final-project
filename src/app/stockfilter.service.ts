import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class StockFilterService {
constructor(private http: HttpClient) { }
    apiKey = "DA65TS7P9O57VGZH"
    exampleUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=15min&outputsize=full&apikey=demo" 

 
    
    getData(){
    return this.http.get(this.exampleUrl);
    
    //stockArray(data){
    //    return 
    //}
   
  }
}
