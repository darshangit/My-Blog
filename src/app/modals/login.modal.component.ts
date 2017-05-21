import {Component, Input, ViewChild, ElementRef, Inject} from '@angular/core'
import { JQ_TOKEN } from '../common/jQuery.services'
import { UserDetails } from 'app/data-models/user-details.model'
import { UserLoginService } from 'app/services/user-login.services'
import { TOASTR_TOKEN, Toastr } from '../common/toastr.services'

@Component({
    selector: 'app-login-modal',
    templateUrl: './login.modal.component.html',
    styles: [`
    em { float: right; color: #E05C65}
    `]
})
export class LoginComponent {
    responseRecieved = false
    disableSubmit = false
    responseStatus: string
    @Input() elementId: string
    @ViewChild('logincontainer') containerEL: ElementRef

    constructor(@Inject(JQ_TOKEN) private $: any,private userService: UserLoginService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr){}

    login(formvalues) {

        let user: UserDetails = {
            email: formvalues.email,
            password: formvalues.password,
            name: null
        }

        this.userService.loginUser(user).subscribe((resp) => {
            this.responseRecieved = true
            this.responseStatus = resp.status

            if (resp.status === 'Logged In Successfully') {
                user = {
                    name: resp.userName,
                    email: resp.userEmail,
                    password: null
                }
                this.userService.setCurrentUser(user)
                this.disableSubmit = true
                this.userService.setAutheticatedFlag()
                this.toastr.success(this.responseStatus);
                setTimeout(() => { this.$(this.containerEL.nativeElement).modal('hide') }, 1000)

            }
        })
    }
}