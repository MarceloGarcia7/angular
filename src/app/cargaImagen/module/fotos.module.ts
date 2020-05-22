import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FotosService } from '../services/fotos.service';
import { FotosRoutingModule } from './fotos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContenedorComponent } from '../contenedor/contenedor.component';
import { CargaComponent } from '../components/carga/carga.component';
import { FotosComponent } from '../components/fotos/fotos.component';
import { UploadDirective } from '../directive/upload.directive';
import { CargaReactiveComponent } from '../components/carga-reactive/carga-reactive.component';



@NgModule({
  declarations: [
    ContenedorComponent,
    CargaComponent,
    FotosComponent,
    UploadDirective,
    CargaReactiveComponent
  ],
  imports: [
    CommonModule,
    FotosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    FotosService
  ],
  exports:  [
    ContenedorComponent
  ]
})
export class FotosModule { }
