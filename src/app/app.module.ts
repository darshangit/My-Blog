import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MyBlogComponent } from './blog-app.component'
import { appRoutes } from './routes';

import { DashboardComponent } from './dashboard/dashboard.component'
import { NavbarComponent } from './navbar/navbar.component'
import { MainTopicComponent } from './topics/main-topics-thumbnail.component'
import { FooterComponent } from './footer/footer.component'
import { SignupComponent } from './modals/signup.modal.component'
import { JQ_TOKEN } from './common/jQuery.services'
import { ModaltriggerDirective } from './modals/modal.trigger.directive'
import { PasswordValidatorDirective } from 'app/modals/passwordValidator.directive'
import { LoginComponent } from 'app/modals/login.modal.component'
import { UserLoginService } from 'app/services/user-login.services'
import { UserUpdateComponent } from 'app/modals/updateuser.modal.component'
import { TopicService } from 'app/services/topics.service'
import { TopicsResolver } from 'app/resolvers/topics.resolver'
import { SubTopicComponent } from 'app/topics/sub-topic.component'
import { CollapsibleWellComponent } from 'app/common/collapsible-well.component'
import { SubListingComponent } from 'app/topics/sub-listing.component'
import { SearchComponent } from 'app/modals/search.model.component'
import { SearchPipe } from 'app/pipe/searchFilter.component'
import { CarousalResolver } from 'app/resolvers/carousal.resolver'
import { GoogleSignInComponent } from 'app/login-signin/google.signin.component'
import { GoogleLoginService } from 'app/services/google-login.services'

declare const jQuery: Object

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
    CollapsibleWellComponent,
    FooterComponent,
    MainTopicComponent,
    SignupComponent,
    LoginComponent,
    UserUpdateComponent,
    SubTopicComponent,
    SubListingComponent,
    SearchComponent,
    ModaltriggerDirective,
    PasswordValidatorDirective,
    NavbarComponent,
    SearchPipe,
    GoogleSignInComponent
  ],
  providers: [
    UserLoginService,
    TopicService,
    TopicsResolver,
    CarousalResolver,
    GoogleLoginService,
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },{
    provide: 'Window', useValue: window
    }
  ],
   bootstrap: [MyBlogComponent]
})
export class AppModule { }
