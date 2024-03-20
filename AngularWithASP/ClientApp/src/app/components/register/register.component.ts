import { Component, OnInit } from '@angular/core';
import { RegisterViewModel } from '../../models/account/register.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: RegisterViewModel = { email: '', password: '', confirmPassword: '' }

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  register(): void {
    if (this.model.password === this.model.confirmPassword) {
      this.authService.register(this.model).subscribe({
        next: () => {
          console.log('Registration successful');
          alert('Registration successful');
        },
        error: (error) => {
          console.error('Registration failed', error);
          alert('Registration failed');
        }
      });
    } else {
      console.error('Passwords do not match');
    }
  }

}
