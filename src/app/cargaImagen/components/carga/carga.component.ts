import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { FotosService } from '../../services/fotos.service';


@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  archivos: FileItem[] = [];
  file: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  progresBare: any = 0;
  color:string = 'red';
  disabled: boolean = false;

  constructor( public cargaImages: FotosService ) { }

  ngOnInit() {
  }

  cargarImagenes() {
    console.log('cargarImagenes', this.archivos);
    this.cargaImages.cargaFinalImages(this.archivos)
    
  }

  fileProgress( evento: any ) {
    // console.log(evento);
    this.file = evento.target.files;
    // console.log(this.file, this.file[0].name, this.file[0].type);
    
    if ( this.estaEnLista( this.file[0].name ) || !this.esImagen( this.file[0].type) ) {
      console.log('Archivo ya subido');
      return 
    } else {  
      this.handleFile();
    }
   
  }

  handleFile() {

    for ( const variable in Object.getOwnPropertyNames( this.file )) {
      const temp = this.file[variable]
      console.log(temp, temp.name);

      this.progresBare += temp.size / 1024 /10;

      console.log(this.progresBare > 20);
      (this.progresBare > 20) ? this.disabled = true : false;
      
      const preurl = this.getUrlFile( temp );
      console.log(preurl, this.previewUrl);
      // temp.push(preurl);
      console.log(temp);
      
      const newfile = new FileItem(temp);
      console.log(newfile);
      this.archivos = [...this.archivos, newfile]
      console.log(this.archivos);
    }

    // let preFile = this.file.type;
    // if (preFile.match(/image\/*/) == null) {
    //   return;
    // }

    // var reader = new FileReader();      
    // reader.readAsDataURL(this.file); 
    // reader.onload = (_event) => { 
    //   this.previewUrl = reader.result;
    // }

    console.log(this.previewUrl);
    

  }

  getUrlFile( file ) {
    console.log(file);

    var reader = new FileReader();      
    reader.readAsDataURL(file); 
    reader.onload = (_event) => {
      console.log(_event);
      
      // console.log(reader.result);
      const rep = reader.result;
      this.previewUrl = rep;
      
    }
    return this.previewUrl;
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

  handleDelete(evento, index) {
    console.log(evento.nameFile, evento.archivo.size, this.archivos);

    this.archivos = this.archivos.filter( (file) => file.nameFile !== evento.nameFile );
    
    this.progresBare -= evento.archivo.size / 1024 /10;
    console.log(this.archivos);
    
  }

  onSubmit() {
    console.log('onSubmit');
    
  }

}
