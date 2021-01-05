import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JtqConstants } from '../constants/jtq-constants';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  // tslint:disable-next-line: typedef
  public async getVisitor(loginForm: Login)
  {
  const promise =  await this.http.post(JtqConstants.LOGIN_URL, loginForm).toPromise();
  return JSON.stringify(promise);
  }
}
