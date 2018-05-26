import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { filter, map, reduce, pluck } from 'rxjs/operators';

@Injectable()
export class AppUserService {

  constructor(private http: HttpClient) { }
  
  url:string = "http://kevin-q2-2018-phortonssf.c9users.io:8080/api";
  appUsersUrl: string = "/appUsers/";

  user: any = {
      firstName: "TesterUserName",
      lastName: "TestLast",
      email: "test1234@gmail.com",
      password: "1234"
  }

   

   register(user){
    return this.http.post(this.url+"/appUsers", user);
   }
   
   login(user){
    return this.http.post(this.url+"/appUsers/login", user);
   }
   
   logged(id){
    let userId = sessionStorage.getItem("userId");
    return this.http.get(this.url+this.appUsersUrl, id);
   }

   //http://kevin-q2-2018-phortonssf.c9users.io:8080/api/appUsers/5afe37584f12ae4f476f8efd/stocks

   favStock(stock){
    let userId = sessionStorage.getItem("userId");
    this.http.post(this.url + this.appUsersUrl + userId + "/stocks/", stock);
   }
   //http://kevin-q2-2018-phortonssf.c9users.io:8080/api/appUsers/ 5afe37584f12ae4f476f8efd/stocks
   getUserStocks(){
    let userId = sessionStorage.getItem("userId");
    return this.http.get(this.url + this.appUsersUrl + userId + "/stocks/")
   }
   
   
}
