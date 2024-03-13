import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from '../../models/account/login.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: LoginViewModel = {email:'',password:''}

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }
  login(): void {
    if (this.model.email && this.model.password) {
      this.authService.login(this.model).subscribe({
        next: (response) => {
          console.log('Login successful', response);
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });
    }
  }
}
