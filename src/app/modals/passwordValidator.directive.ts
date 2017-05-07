import { Directive } from '@angular/core'
import { FormGroup, NG_VALIDATORS, Validator } from '@angular/forms'

@Directive({
    selector: '[appValidatePasswordDirective]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true }]
})
export class PasswordValidatorDirective implements Validator {
    validate(formGroup: FormGroup): { [key: string]: any } {

        console.log('diretive diretive')
        const password = formGroup.controls['password']
        const confirmPassword = formGroup.controls['repassword']

        console.log('********************')

        console.log(password)
        console.log(confirmPassword)
        if (password !== undefined && confirmPassword !== undefined) {
            if (password.value !== confirmPassword.value) {
                return { appValidatePasswordDirective: false }
            } else {
                return null
            }
        }
    }
}