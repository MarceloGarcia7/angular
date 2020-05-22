import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContenedorComponent } from '../contenedor/contenedor.component';
import { FotosComponent } from '../components/fotos/fotos.component';
import { CargaComponent } from '../components/carga/carga.component';
import { CargaReactiveComponent } from '../components/carga-reactive/carga-reactive.component';


export const routes: Routes = [
  { path: '', component: ContenedorComponent,
    children: [
      { path: 'fotos', component: FotosComponent },
      { path: 'carga', component: CargaComponent },
      { path: 'reactive/:params', component: CargaReactiveComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FotosRoutingModule { }