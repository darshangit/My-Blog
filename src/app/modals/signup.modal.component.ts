import {
    Component, Input, Inject, ViewChild, ElementRef, OnChanges
} from '@angular/core'

import { JQ_TOKEN } from '../common/jQuery.services'
import { FormGroup} from '@angular/forms'


@Component({
    selector: 'app-signup-modal',
    templateUrl: './signup.modal.component.html',
    styles: [
        `em { float: right; color: #E05C65;`
    ]
})
export class SignupComponent {
    @Input() elementId: string
    @Input() password: string
    @ViewChild('modalcontainer') containerEL: ElementRef
    constructor( @Inject(JQ_TOKEN) private $: any) { }
    
    // cancel() {
    //     this.$(this.containerEL.nativeElement).modal('hide')
    // }

    signUp(formValues) {
        console.log(formValues)
         this.$(this.containerEL.nativeElement).modal('hide')

    }
}
