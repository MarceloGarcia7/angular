import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidate {
  [ s: string ]: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  existeUser( control: FormControl ): Promise<ErrorValidate> | Observable<ErrorValidate> {

    console.log(control);
    

    return new Promise ( (resolve, reject) => {

      setTimeout(() => {

        if ( control.value === 'sticker' ) {
          resolve( {existe:true} );
        } else {
          resolve(null);
        }
      }, 2500);
    })
  }

  noHerrera( control: FormControl ): {[ s: string ]: boolean} {
    console.log(control.value);
    if ( control.value ) {
      if ( control.value.toLowerCase() === 'herrera' ) {
      return {
        noHerrera:true
      };
    }
    }
    
    return null;
  }
}
