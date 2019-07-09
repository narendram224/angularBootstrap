import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { Directive ,Input} from '@angular/core';

@Directive({
  selector: '[appSelectvalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: SelectRequiredValidatorDirective,
      multi: true
    }
  ]
})
export class SelectRequiredValidatorDirective implements Validator {
  // @Input()appSelectvalidator:string;
  @Input('appSelectvalidator') defaultValues : string;
  validate(control: AbstractControl): { [key: string]: any } | null {
    return control.value === this.defaultValues ? { defaultvalue: true } : null;
  }
}
