import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsRoutingModule } from './forms-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { PaisService } from '../services/pais.service';

import { TemplateComponent } from '../template/template.component';
import { ReactiveComponent } from '../reactive/reactive.component';
import { ContenedorComponent } from '../contenedor/contenedor.component';





@NgModule({
  declarations: [
    ContenedorComponent,
    TemplateComponent,
    ReactiveComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormsRoutingModule,
    HttpClientModule
  ],
  providers: [
    PaisService
  ],
  exports:  [
    ContenedorComponent
  ]
})
export class FormulariosModule { }
