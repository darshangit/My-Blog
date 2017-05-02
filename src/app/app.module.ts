import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MyBlogComponent } from './blog-app.component'
import { appRoutes } from './routes';
import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
   imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    MyBlogComponent,
    DashboardComponent
  ],
  providers: [],
  bootstrap: [MyBlogComponent]
})
export class AppModule { }
