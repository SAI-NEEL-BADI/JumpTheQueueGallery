import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginAndRegisterComponent } from './login-and-register/login-and-register.component';
import { ShowQueueComponent } from './show-queue/show-queue.component';
import { SignupComponent } from './signup/signup.component';
import { VisitQueueComponent } from './visit-queue/visit-queue.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginAndRegisterComponent,
    ShowQueueComponent,
    SignupComponent,
    VisitQueueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: LoginAndRegisterComponent},
      {path: 'search', component: AppComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
