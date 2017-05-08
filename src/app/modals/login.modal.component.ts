import { Component, Input, ViewChild, ElementRef
 } from '@angular/core'

@Component({
    selector: 'app-login-modal',
    templateUrl: './login.modal.component.html',
    styles: [`
    em { float: right; color: #E05C65}
    `]
})
export class LoginComponent {
    @Input() elementId: string
    @ViewChild('logincontainer') containerEL: ElementRef
}