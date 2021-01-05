import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterVisitor } from '../models/register-visitor';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {}
  registerForm: RegisterVisitor = new RegisterVisitor();
  msg: string;
  errorMsg: string;
  ngOnInit(): void {}
  // tslint:disable-next-line: typedef
  signIn() {
    this.router.navigateByUrl('/jumpthequeue/login');
  }
  // tslint:disable-next-line: typedef
  registerVisitor() {
    this.registerForm.userType = true;
    this.registerService.saveVisitor(this.registerForm).then((data) => {
      this.msg = JSON.parse(data);
      this.router.navigateByUrl('/jumpthequeue/login');
    });
  }
}
