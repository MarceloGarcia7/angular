import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Modulos 
import { TalleresModule } from './moduleTalleres/components/contenedor/talleres.module';
import { FormulariosModule } from './forms/module/forms.module';
import { FotosModule } from './cargaImagen/module/fotos.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    TalleresModule,
    FormulariosModule,
    FotosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
