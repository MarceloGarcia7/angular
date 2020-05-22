import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Juan',
    apellido: 'Tom',
    email: 'mail@mail.com',
    pais: 'URY',
    genero: ''
  }

  paises: any[] = [];

  constructor( private paisService: PaisService) { }

  ngOnInit() {

    this.paisService.getPaises()
      .subscribe( paises => {
        this.paises = paises;
        this.paises = [{name:'Seleccione un Pais', code:''}, ...this.paises];
        
        console.log(this.paises);
      });
  }

  guardarForm( form: NgForm ) {

    if ( form.invalid ) {

      console.log(form.controls);

      Object.values( form.controls ).map( control => {
        // console.log(control);
        control.markAsTouched();
      })
    
      return;
    }
    console.log('guardarForm', form);
    
  }

}
