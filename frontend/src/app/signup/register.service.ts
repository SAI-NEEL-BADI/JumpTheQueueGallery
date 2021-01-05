import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JtqConstants } from '../constants/jtq-constants';
import { RegisterVisitor } from '../models/register-visitor';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  // tslint:disable-next-line: typedef
  public async saveVisitor(registerForm: RegisterVisitor) {
    const promise = await this.http.post(JtqConstants.SIGN_UP_URL, registerForm).toPromise();
    return JSON.stringify(promise);
  }
}
