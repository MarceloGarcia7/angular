import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidadoresService } from '../services/validadores.service';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor( private fb: FormBuilder, private validadores: ValidadoresService) {

    this.crearFormulario();
    this.cargarDataForm();
  }

  ngOnInit() {
  }

  get pasatiempos() {
    
    return this.forma.get('pasatiempos') as FormArray;
  }

  get nameValid() {
    return !this.forma.get('name').valid && this.forma.get('name').touched
  }

  get apellidoValid() {
    return !this.forma.get('apellido').valid && this.forma.get('apellido').touched
  }

  get telefonoValid() {
    return !this.forma.get('telefono').valid && this.forma.get('telefono').touched
  }

  get usuarioNoValid() {
    return !this.forma.get('usuario').valid && this.forma.get('usuario').touched
  }

  get emailValid() {
    return !this.forma.get('email').valid && this.forma.get('email').touched
  }

  get ciudadValid() {
    return !this.forma.get('direccion.ciudad').valid && this.forma.get('direccion.ciudad').touched
  }

  get distritoValid() {
    return !this.forma.get('direccion.distrito').valid && this.forma.get('direccion.distrito').touched
  }

  crearFormulario() {

    this.forma = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5) ] ],
      apellido: ['', [Validators.required, this.validadores.noHerrera ]], //("(09)[0-9]{7}")
      telefono: ['', [Validators.required, Validators.minLength(5), Validators.pattern(new RegExp("^((\\+34-?))?[6789]{1}[0-9]{8}$")) ] ],
      usuario: ['', [Validators.required], this.validadores.existeUser],
      email: ['ema@mail.com', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      direccion: this.fb.group({
        distrito: ['', [Validators.required] ],
        ciudad: ['', [Validators.required] ],
      }),
      pasatiempos: this.fb.array([])
    });
  }

  cargarDataForm() {

    this.forma.setValue({
      name: '',
      apellido: 'Tom',
      telefono: 'Tom',
      usuario: '',
      email: 'ema@mail.com',
      direccion: {
        distrito: '',
        ciudad: 'Otawa'
      },
      pasatiempos:[]
    })

  }

  guardar() {

    if ( this.forma.invalid ) {

      Object.values( this.forma.controls ).map( control => {
        console.log(control);
        if ( control instanceof FormGroup ) {
          Object.values( control.controls ).map( subControl => {
            console.log(subControl);
            subControl.markAsTouched();
          })
        } else{
           control.markAsTouched();
        }
      })
      return;
    }
     // Luego del posteo de la forma RESETEAMOS TODO
    this.forma.reset();
    console.log(this.forma);
  }

  borrarPasatiempo( index: number) {
    console.log(index);
    this.pasatiempos.removeAt(index);
    
  }

  addPasatiempo() {
    this.pasatiempos.push( this.fb.control('nuevo', Validators.required))
  }



}
