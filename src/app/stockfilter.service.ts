import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { filter, map, reduce, pluck } from 'rxjs/operators';


@Injectable()
export class StockFilterService {
constructor(private http: HttpClient) { }
    apiKey = "DA65TS7P9O57VGZH"
    exampleUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=demo" 

    
    
    getData(){
    return this.http.get(this.exampleUrl)
        .pipe(
        
            pluck("Time Series (Daily)"),    
                
                //map to access the indivudal array and datatype to access it
                map((data: any) => {
                    console.log("mapped data: ", data);
                    
                    let openStock = [];
                    
                    for( let key in data ){
                        
                        //look into the let key in key to make the program more robust and remove the "1. open" point
                        openStock.push( data[key]["1. open"] );
                    
                    }
                    return openStock;
                }),
                
                map((stocks: any) => {
                    
                    //console.log("2nd Chained", data);
                    
                    return stocks.map( stock => {
                        return stock.slice(0,5)
                    })
                    
                })    
                
                
                
                
                
            )
     

    //take int he data object and pull of the property open and push into an array
    //use for each method to hit each of the properties named
    
    
    
   
  }
}
