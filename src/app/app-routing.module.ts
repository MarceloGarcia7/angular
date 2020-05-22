import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: `home`, pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./moduleTalleres/components/contenedor/talleres.module').then(m => m.TalleresModule) },
  { path: 'forms', loadChildren: () => import('./forms/module/forms.module').then(m => m.FormulariosModule) },
  { path: 'fotos', loadChildren: () => import('./cargaImagen/module/fotos.module').then(m => m.FotosModule) },
  { path: '**', pathMatch: 'full', redirectTo: `home` },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
