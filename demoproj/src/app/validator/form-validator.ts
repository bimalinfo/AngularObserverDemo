import { AbstractControl } from '@angular/forms';

export function emailValidator(control:AbstractControl):{ [key:string]:any } | null {
  if (control.value !== undefined && (!isNaN(control.value))) {
    return { 'emailValid': true };
  }
}

export function phoneNumberValidator(control: AbstractControl): { [key: string]: any } | null {
  //const valid = /^d+$/.test(control.value); //using regular expression
  console.log(control.value.toString().length);

  if (control.value !== undefined && control.value!=null && (isNaN(control.value) || control.value.toString().length != 10)) {
    return { 'invalidPhoneNumber': true };
  }
  //return valid ? null : {invalidPhoneNumber: {valid: false, value: control.value}};
}

export function ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
    return { 'ageRange': true };
  }
  return null;
}
