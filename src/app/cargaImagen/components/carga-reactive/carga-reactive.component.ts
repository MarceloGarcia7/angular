import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FileItem } from '../../models/file-item';
import { FotosService } from '../../services/fotos.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-carga-reactive',
  templateUrl: './carga-reactive.component.html',
  styleUrls: ['./carga-reactive.component.css']
})
export class CargaReactiveComponent implements OnInit {

  myForm: FormGroup;
  param: any = [];

  archivos: FileItem[] = [];
  file: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  progresBare: any = 0;
  color:string = 'red';
  disabled: boolean = false;

  constructor( private fb: FormBuilder,
    private validadores: FotosService,
    private router: ActivatedRoute ) {

      console.log('Called constructor');
    
    this.router.params.subscribe(params => {
      // console.log(params);
      var query = params.params.substr(1);
      // console.log( query );
      query.split("&").forEach( ( part:any ) => {
        // console.log(part);
        var item = part.split("=");
        // console.log(item);
        if ( item[0] == 'name' || item[0] == 'id' ) {
          this.param = [...this.param,  {[item[0]]: item[1] } ]
        }        
      })
      console.log(this.param);
    });
  }

  ngOnInit() {

    console.log('Called ngOnInit');
      this.crearFormulario();
      this.setValues();
    
  }

  setValues() {

    this.param.forEach( ( part:any ) => {
      console.log(part.id);
      if (part.name) {
        this.myForm.patchValue({
          name: part.name,
        });
      } else {
        this.myForm.patchValue({
          id: part.id,
        });
      }
      
    })

    

  }

  get pasatiempos() {

    return this.myForm.get('files') as FormArray;
  }

   // convenience getter for easy access to form fields
  get f() {
    return this.myForm.controls;
  }


  get apellidoValid() {
    return !this.myForm.get('apellido').valid && this.myForm.get('apellido').touched
  }

  crearFormulario() {

    this.myForm = this.fb.group({
      name: ['hola', [Validators.required, Validators.minLength(5) ] ],
      apellido: ['chau', [Validators.required, Validators.minLength(5) ] ],
      file: ['', [Validators.required ] ],
      // fileSource: [''],
      // email: ['ema@mail.com', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')] ],
      // direccion: this.fb.group({
      //   distrito: ['', [Validators.required] ],
      //   ciudad: ['', [Validators.required] ],
      // }),
      files: this.fb.array([])
    });
  }

  onFileChange( evento: any ) {
    console.log(evento);
    this.file = evento.target.files[0];
    // console.log(this.file, this.file[0].name, evento.target.files[0]);
    console.log(evento.target.files[0], this.file);
    // this.myForm.patchValue({
    //   fileSource:  evento.target.files[0]
    // })
    
    if ( this.estaEnLista( this.file.name ) || !this.esImagen( this.file.type) ) {
      console.log('Archivo ya subido');
      return 
    } else {  
      this.handleFile2(this.file);
    }
   
  }

  handleFile2(file: File) {

    var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => { 
        this.pasatiempos.push( this.fb.control({
          file,
          url:reader.result
        }, Validators.required, this.validadores.existeUser)
        )
        console.log(this.myForm.value);
      }
  }

  handleDelete( index: number) {
    console.log(index);
    this.pasatiempos.removeAt(index);
    console.log(this.myForm.value);
  }

  handleFile() {

    for ( const variable in Object.getOwnPropertyNames( this.file )) {
      console.log(variable, this.file);
      
      const temp = this.file[variable]
      console.log(temp, temp.name);

      this.progresBare += temp.size / 1024 /10;

      (this.progresBare > 20) ? this.disabled = true : false;
      
      var reader = new FileReader();
      reader.readAsDataURL(temp);
      reader.onload = (_event) => { 
        this.pasatiempos.push( this.fb.control({
          temp,
          url:reader.result
        }, Validators.required, this.validadores.existeUser)
        )
        console.log(this.myForm.value);
        // temp.url = reader.result;
      }

      // console.log(temp);
      
      
      // const newfile = new FileItem(temp);
      // console.log(newfile);
      // this.archivos = [...this.archivos, newfile]
      // console.log(this.archivos);
      // this.myForm.patchValue({
      //   fileSource: this.archivos,
      //   // files: [...this.archivos]
      // })

      // this.addPasatiempo(this.archivos)
    }

    // console.log(this.previewUrl);
    // console.log(this.myForm.value);
  }

  addPasatiempo( arr: any[]) {
    // console.log(...arr, this.fb.control );
    this.pasatiempos.push( this.fb.control(arr))
    console.log(this.myForm);
    
  }

   // VALIDACIONES

   esImagen( tipoArchivo: string ): boolean {
    console.log(tipoArchivo.startsWith('image'));
    console.log(tipoArchivo.endsWith('png' || 'jpg'));
    return ( tipoArchivo === '' || tipoArchivo === undefined ) ? false : tipoArchivo.startsWith('image');
  }

  estaEnLista( nameFIle: string): boolean {
    console.log(nameFIle);
    for ( const archivo of this.archivos ) {
      console.log(archivo.nameFile === nameFIle);
      if ( nameFIle === archivo.nameFile ) {
        console.log('El archivo ' + nameFIle + ' ya esta subido');
        return true;
      }
    }
    return false;
  }



  submit() {
    console.log('onSubmit', this.myForm.controls.name.valid);
    
  }

}
