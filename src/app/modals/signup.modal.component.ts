import {
    Component, Input, Inject, ViewChild, ElementRef
 } from '@angular/core'

 import { JQ_TOKEN } from '../common/jQuery.services'

@Component({
    selector: 'app-signup-modal',
    templateUrl: './signup.modal.component.html'
})
export class SignupComponent{
    @Input() elementId: string
    @ViewChild('modalcontainer') containerEL: ElementRef

constructor(@Inject(JQ_TOKEN) private $: any){}
    cancel() {
        this.$(this.containerEL.nativeElement).modal('hide')
    }
}