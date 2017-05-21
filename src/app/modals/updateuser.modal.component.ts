import { Component, OnInit, OnChanges, Inject, Input, ViewChild, ElementRef } from '@angular/core'
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'
import { UserLoginService } from 'app/services/user-login.services'
import { JQ_TOKEN } from '../common/jQuery.services'
import { UserDetails } from 'app/data-models/user-details.model'
import { TOASTR_TOKEN, Toastr } from '../common/toastr.services'

@Component({
    selector: 'app-updateuser-modal',
    templateUrl: './updateuser.modal.component.html',
    styles: [`
    em { float: right; color: #E05C65}
    `]
})
export class UserUpdateComponent{
    responseRecieved = false
    disableSubmit = false
    responseStatus: string
    @Input() elementId: string
    @ViewChild('updatecontainer') containerEL: ElementRef
    constructor( @Inject(JQ_TOKEN) private $: any,
    private userLoginService: UserLoginService,
    @Inject(TOASTR_TOKEN) private toastr: Toastr) {}

    getName() {
            return this.userLoginService.getCurrentUserName()
    }

    updateUser(formValues){

        const user: UserDetails = {
            name: formValues.name,
            email: this.userLoginService.getCurrentEmail(),
            password: undefined
        }
        this.userLoginService.updateUser(user).subscribe((resp) => {
            this.responseRecieved = true
            this.responseStatus = resp.status
            if ( resp.status === 'Name Updated Successfully' ) {
                this.disableSubmit = true
                this.userLoginService.setCurrentUser(user)
                this.toastr.info(this.responseStatus);
                this.$(this.containerEL.nativeElement).modal('hide')
                // setTimeout(() => { this.$(this.containerEL.nativeElement).modal('hide') }, )
            }
        } )
    }
}
