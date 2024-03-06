import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from '../../models/account/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginViewModel = {email:'',password:''}

  constructor() { }

  ngOnInit(): void {
  }

}
