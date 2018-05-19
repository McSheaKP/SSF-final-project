import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppUserService } from '../app-user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  
  constructor(private _aus: AppUserService){}
  
  user: any = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  }
  
  userData: any;
  
  doRegister(){
    this._aus.register(this.user).subscribe(data => console.log("User registered", data));
    this.deleteRegister();
  }
  
  deleteRegister(){
    this.user.firstName = "";
    this.user.lastName = "";
    this.user.email = "";
    this.user.password = "";
  }
  
  ngOnInit() {
    this._aus.register(this._aus.user).subscribe(data => console.log(data));
  }

}
