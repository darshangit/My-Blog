import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { ModaltriggerDirective } from './modals/modal.trigger.directive'

declare const jQuery: Object

@NgModule({
   imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    MyBlogComponent,
    DashboardComponent,
    NavbarComponent,
    FooterComponent,
    InitialLearningComponent,
    SignupComponent,
    ModaltriggerDirective
  ],
  providers: [
{
  provide: JQ_TOKEN,
  useValue: jQuery
}

  ],
  bootstrap: [MyBlogComponent]
})
export class AppModule { }
