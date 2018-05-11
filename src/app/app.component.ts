import { Component, OnInit } from '@angular/core';
import { StockfilterService } from './stockfilter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';


 constructor(private _sfs: StockfilterService){}
 ngOnInit(){
    this._sfs.getData()
    .subscribe( data => console.log(data))
  }
}