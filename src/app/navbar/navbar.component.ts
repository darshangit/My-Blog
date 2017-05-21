import { Component } from '@angular/core'
import { UserLoginService } from 'app/services/user-login.services'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent {

    constructor(private userService: UserLoginService) {}

}