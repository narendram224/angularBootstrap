import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector:'[appConfirmEqualValidator]',
  providers:[{
    provide:NG_VALIDATORS,
    useExisting:ConfirmEqualValidatorDirective,
    multi:true
  }]
})
export class ConfirmEqualValidatorDirective implements Validator{

// this is the second option to check the cofrm password field
validate(passwordGroup:AbstractControl):{[key:string]:any}| null {
    const password = passwordGroup.get('password');
    const confirmPassword = passwordGroup.get('Confirmpassword');


  if (password &&confirmPassword && password.value !==confirmPassword.value) {
    return {'notEqual':true}
  }
  return null;
}




  // this is first option  to validate confrok password field

  // @Input()appConfirmEqualValidator: string;
  // validate(control:AbstractControl):{[key:string]:any}| null {
  //     const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
  //     if (controlToCompare && controlToCompare.value !==control.value) {
  //       return {'notEqual':true}
  //     }
  //     return null;
  // }



}
