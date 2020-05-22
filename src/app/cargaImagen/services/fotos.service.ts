import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FileItem } from '../models/file-item';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

interface ErrorValidate {
  [ s: string ]: boolean
}

@Injectable()

export class FotosService {

  private CARPETA_IMAGENES = 'img';

  constructor( private http: HttpClient ) { }

  private guardarFile( imagen: { name:string, url:string } ) {
    console.log(imagen);
    // this.http.post()
  }

  cargaFinalImages( images: FileItem[] ) {
    console.log(images);
  }

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
}
