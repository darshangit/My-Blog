import { Component, Input, Inject, ViewChild, ElementRef, OnChanges, Output } from '@angular/core'
import { JQ_TOKEN } from '../common/jQuery.services'
import { FormGroup } from '@angular/forms'
import { UserLoginService } from '../services/user-login.services'
import { UserDetails } from 'app/data-models/user-details.model'
import { UserResponse } from 'app/data-models/signup-response.model'


@Component({
    selector: 'app-signup-modal',
    templateUrl: './signup.modal.component.html',
    styles: [
        `em { float: right; color: #E05C65; }`
    ]
})
export class SignupComponent {
    responseRecieved = false
    disableSubmit = false
    responseStatus: string
    @Input() elementId: string
    @Input() password: string
    @ViewChild('modalcontainer') containerEL: ElementRef
    constructor( @Inject(JQ_TOKEN) private $: any, private userLoginService: UserLoginService) { }
    // cancel() {
    //     this.$(this.containerEL.nativeElement).modal('hide')
    // }

    signUp(formValues) {
        const user: UserDetails = {
            email: formValues.email,
            name: formValues.name,
            password: formValues.ngpassDirective.password
        }

        this.userLoginService.saveLogin(user).subscribe((resp) => {
            this.responseRecieved = true
            this.responseStatus = resp.status

            if (resp.status === 'Account Created Successfully') {
                this.disableSubmit = true
                 setTimeout(() => { this.$(this.containerEL.nativeElement).modal('hide') }, 3000)
            }
        });
    }
}
