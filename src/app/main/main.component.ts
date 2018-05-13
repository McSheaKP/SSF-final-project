import { Component, OnInit } from '@angular/core';
import { StockFilterService } from '../stockfilter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  constructor(private _sfs: StockFilterService){}
  
  stockData: any;

  getStocks() {
    console.log("[This getStocks]")
    this._sfs.getData().subscribe(data => {
      console.log('Data:', data)
      this.stockData = data;
      console.log('Set stock data:', this.stockData)
    });
  }
  

  ngOnInit() {
    this.getStocks();
  }

}
