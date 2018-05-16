import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppUserService } from '../app-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  
  constructor(private _aus: AppUserService){}
  
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  
  ngOnInit() {
  }

}
