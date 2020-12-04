import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

import { Login } from './login';
import { LoginService } from './login.service';
import { LocalVisitor } from '../models/local-visitor';
@Component({
  selector: 'app-login-and-register',
  templateUrl: './login-and-register.component.html',
  styleUrls: ['./login-and-register.component.scss']
})
export class LoginAndRegisterComponent implements OnInit {

userName: string;
password1: string;
localUSername: string;
localPassword: string;

  visitor: LocalVisitor = new LocalVisitor();
  loginForm: Login = new Login();
  visitorDetails: any = [];
  msg: string;
  errorMsg: string;
  @ViewChild('loginfrm')
  form: NgForm;

  localUser: LocalVisitor = new LocalVisitor();


  constructor(private router: Router, private loginService: LoginService) { }


  ngOnInit(): void {
    this.visitor = JSON.parse(localStorage.getItem('visitor'));
    if ( this.visitor === null){
      this.router.navigateByUrl('/jumpthequeue/login');
    }
    else{
      this.router.navigateByUrl('/jumpthequeue/join-leave');
      }
    }

    login(){
    this.loginForm.username =  this.userName;
    this.loginForm.password = this.password1;
    this.loginService.getVisitor(this.loginForm).subscribe(data => {
      this.visitorDetails = data.content[0];
      if (this.visitorDetails.username === this.userName && this.visitorDetails.password === this.password1
        ){
          this.localUser.id = this.visitorDetails.id;
          this.localUser.name = this.visitorDetails.name;
          this.localUser.username = this.visitorDetails.username;
          this.localUser.phoneNumber = this.visitorDetails.phoneNumber;
          this.localUser.acceptedTerms = this.visitorDetails.acceptedTerms;
          this.localUser.acceptedCommercial = this.visitorDetails.acceptedCommercial;
          this.localUser.userType = this.visitorDetails.userType;
          localStorage.setItem('visitor', JSON.stringify(this.localUser));
          this.router.navigateByUrl('/jumpthequeue/join-leave');
      }
      else{
        window.alert('not registerd. try again or sign up');
        this.router.navigateByUrl('/');
      }
    });
      }

      signUp(){
        this.router.navigateByUrl('/jumpthequeue/register');
      }

}
