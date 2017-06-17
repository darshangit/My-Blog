import { Component } from '@angular/core'

@Component({
    selector: 'app-my-blog',
    template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    `
})
export class MyBlogComponent {

}
