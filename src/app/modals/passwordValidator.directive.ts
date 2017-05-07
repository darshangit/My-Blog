import { Directive } from '@angular/core'
import { FormGroup, NG_VALIDATORS, Validator } from '@angular/forms'

@Directive({
    selector: '[appValidatePasswordDirective]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true }]
})
export class PasswordValidatorDirective implements Validator {
    validate(formGroup: FormGroup): { [key: string]: any } {

        const password = formGroup.controls['password']
        const confirmPassword = formGroup.controls['repassword']

        if (password !== undefined && confirmPassword !== undefined) {
            if (password.value !== confirmPassword.value) {
                return { appValidatePasswordDirective: false }
            } else {
                return null
            }
        }
    }
}