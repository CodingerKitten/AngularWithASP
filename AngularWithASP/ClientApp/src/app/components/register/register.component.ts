import { Component, OnInit } from '@angular/core';
import { RegisterViewModel } from '../../models/account/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: RegisterViewModel = { email: '', password: '', confirmPassword: '' }

  constructor(/*private authService : AuthService*/) { }

  ngOnInit(): void {
  }

}
