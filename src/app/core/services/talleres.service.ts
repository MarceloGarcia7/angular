import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { talleres } from './../../moduleTalleres/interfaces/talleres';


@Injectable()

export class TallerService {
  
  constructor(private http: HttpClient) { }

  getTalleres() {
    return talleres;

  }

}
