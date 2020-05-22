import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenedorComponent } from './contenedor.component';
import { SearchShopComponent } from '../search-shop/search-shop.component';
import { CitaPreviaComponent } from '../cita-previa/cita-previa.component';

export const routes: Routes = [
  { path: '', component: ContenedorComponent,
    children: [
      { path: '', component: SearchShopComponent },
      { path: 'reserva-taller/cita/:id', component: CitaPreviaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TalleresRoutingModule { }