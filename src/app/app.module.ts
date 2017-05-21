import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MyBlogComponent } from './blog-app.component'
import { appRoutes } from './routes';

import { DashboardComponent } from './dashboard/dashboard.component'
import { NavbarComponent } from './navbar/navbar.component'
import { InitialLearningComponent } from './initial-learnings/initial-learning.component'
import { FooterComponent } from './footer/footer.component'
import { SignupComponent } from './modals/signup.modal.component'
import { JQ_TOKEN } from './common/jQuery.services'
import { TOASTR_TOKEN, Toastr } from './common/toastr.services'
import { ModaltriggerDirective } from './modals/modal.trigger.directive'
import { PasswordValidatorDirective } from 'app/modals/passwordValidator.directive'
import { LoginComponent } from 'app/modals/login.modal.component'
import { UserLoginService } from 'app/services/user-login.services'
import { UserUpdateComponent } from 'app/modals/updateuser.modal.component'

declare const jQuery: Object
declare const toastr: Toastr;

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    MyBlogComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    InitialLearningComponent,
    SignupComponent,
    LoginComponent,
    UserUpdateComponent,
    ModaltriggerDirective,
    PasswordValidatorDirective
  ],
  providers: [
    UserLoginService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr,
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    }
  ],
  bootstrap: [MyBlogComponent]
})
export class AppModule { }
