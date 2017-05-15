import { Component, Input, Inject, ViewChild, ElementRef, OnChanges } from '@angular/core'
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
    success: boolean
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
            if(resp.status === 'Account Created Successfully' ){
                this.success = true
            }else{
                this.success = false
            }
            console.log(resp.status)
        } );

        // this.$(this.containerEL.nativeElement).modal('hide')

    }
}
