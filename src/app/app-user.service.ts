import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { filter, map, reduce, pluck } from 'rxjs/operators';

@Injectable()
export class AppUserService {

  constructor(private http: HttpClient) { }
  
  url:string = "http://kevin-q2-2018-phortonssf.c9users.io:8080/api";

  user: any = {
      firstName: "TesterUserName",
      lastName: "TestLast",
      email: "test1234@gmail.com",
      password: "1234"
  }

   register(user){
    return this.http.post(this.url+"/appUsers", user);
   }
}
