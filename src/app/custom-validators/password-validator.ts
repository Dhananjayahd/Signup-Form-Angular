import { FormGroup } from '@angular/forms';

export function PasswordChecker(controlName : string,compareControlName : string){
    return ((formGroup : FormGroup)=>{
        const pass = formGroup.controls[controlName];
        const confirmPass = formGroup.controls[compareControlName];

        if(pass.value !== confirmPass.value){
            confirmPass.setErrors({mustmatch : true});
        }else{
            confirmPass.setErrors(null);
        }
    })
}