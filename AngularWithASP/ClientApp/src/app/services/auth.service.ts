import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginViewModel } from '../models/account/login.model';
import { RegisterViewModel } from '../models/account/register.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = 'https://localhost:7024/api/account/login';
  private registerUrl = 'https://localhost:7024/api/account/register';

  constructor(private http: HttpClient) { }

  login(model: LoginViewModel): Observable<any> {
    return this.http.post(this.loginUrl, model);
  }

  register(model: RegisterViewModel): Observable<any> {
    return this.http.post(this.registerUrl, model);
  }
}
