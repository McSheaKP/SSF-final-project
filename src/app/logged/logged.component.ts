import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StockFilterService } from '../stockfilter.service';
import { AppUserService } from '../app-user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements OnInit {

  constructor(private _aus: AppUserService, private _sfs: StockFilterService, private _router: Router){}
  
  stock: any = {
    ticker: "",
  }
  
  savedStocks: any;
  userData: any;
  
  addStock(){
    this._aus.favStock(this.stock)
      .subscribe( (res: any) => {
        console.log("showing the result of add stock", res);
      })
  }
  
  onDelete(ticker){
    
  }
  
  getUserStocks(){
    
  }
  
  
  // create a log out function that routes back to the main page and clears the session
  logOut(){
    
  }
  
  
  ngOnInit() {
    
    //Upon initialization we want to pull user data and push data into the dom
      this._aus.logged()  
        .subscribe( (res: any) => {
             console.log('showing the get call from  aus',res);
             this.userData = res;
      })       
      this._aus.getUserStocks()
      .subscribe( (res: any) => {
             console.log("these are the stocks for userID", res)
            this.savedStocks = res;
            console.log("stcoks are saved",this.savedStocks)
      })       
             
              
    // })
    
    //Upon initilization we want to pull stock data associated with that 
    
    
    

  }
}