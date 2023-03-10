import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[appPhoneValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneValidatorDirective,
      multi: true,
    },
  ],
})
export class PhoneValidatorDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
    const isValid = phoneRegex.test(control.value);
    return isValid ? null : { phoneValidator: { value: control.value } };
  }

}
