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
                
            //takes the data and pushing each key and property into an empty array returns array
            map((data: any) => {
                console.log("mapped data: ", data);
                
                let openStock = [];
                //let closedStock = [];
                
                for( let key in data ){
                    
                    //look into the let key in key to make the program more robust and remove the "1. open" point
                    openStock.push( data[key]["1. open"] );
                    //closedStock.push( data[key]["2. high"])
                    
                }
                return openStock;
            }),
                
            map((stocks: any) => {
                
                //console.log("2nd Chained", data);
                
                return stocks.map( stock => {
                     return Number(stock.slice(0,5));
                     
                })
                
            }),
            
            map((stocks: any) => [{data: [...stocks] , label: "Open Amount" }]
            )
            
        )
     

    //take int he data object and pull of the property open and push into an array
    //use for each method to hit each of the properties named
    
    
    
   
  }
}
