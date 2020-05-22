import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TalleresRoutingModule } from './talleres-routing.module';
import { TallerService } from '../../services/talleres.service';

import { ContenedorComponent } from './contenedor.component';
// import { TypeofPipe } from '../../../shared/pipe/typeof.pipe';
import { SearchShopComponent } from '../search-shop/search-shop.component';
import { CitaPreviaComponent } from '../cita-previa/cita-previa.component';
import { FilterPipe } from '../../pipes/filter.pipe';


 

@NgModule({
  declarations: [
    ContenedorComponent,
    SearchShopComponent,
    CitaPreviaComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    TalleresRoutingModule
  ],
  providers: [
    TallerService
  ],
  exports:  [
    ContenedorComponent
  ]
})
export class TalleresModule { }