import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppUserService } from '../app-user.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _aus: AppUserService){}

  user: any = {
    email: "",
    password: ""
  }

  doLogin(){
    this._aus.register(this.user).subscribe(data => console.log("User Logged In", data));
    this.deleteLogin();
  }
  
  deleteLogin(){
    this.user.email = "";
    this.user.password = "";
  }

  ngOnInit() {
    this._aus.login(this._aus.user).subscribe(data => console.log(data));
  }

}
