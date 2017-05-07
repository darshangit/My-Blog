import {
    Component, Input, Inject, ViewChild, ElementRef
} from '@angular/core'

import { JQ_TOKEN } from '../common/jQuery.services'

@Component({
    selector: 'app-signup-modal',
    templateUrl: './signup.modal.component.html',
    styles: [
        `em { float: right; color: #E05C65;`
    ]
})
export class SignupComponent {
    @Input() elementId: string
    @ViewChild('modalcontainer') containerEL: ElementRef

    constructor( @Inject(JQ_TOKEN) private $: any) { }
    cancel() {
        this.$(this.containerEL.nativeElement).modal('hide')
    }

    signUp(formValues) {
        console.log(formValues.name)
    }

    validatePassword(formValues) {
        console.log(formValues.password)
        console.log(formValues.repassword)
        console.log(formValues.password === formValues.repassword)
        return formValues.password === formValues.repassword
    }
}