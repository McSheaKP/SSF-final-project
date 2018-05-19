import { Component, OnInit } from '@angular/core';
import { StockFilterService } from './stockfilter.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
 


 constructor(private _sfs: StockFilterService){}
 ngOnInit(){
    this._sfs.getData()
     .subscribe( data => console.log("Testing Data is correct",data))
  }
}