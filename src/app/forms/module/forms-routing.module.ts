import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from '../template/template.component';
import { ReactiveComponent } from '../reactive/reactive.component';
import { ContenedorComponent } from '../contenedor/contenedor.component';


export const routes: Routes = [
    // { path: '', redirectTo: `forms`, pathMatch: 'full' },
    { path: '', component: ContenedorComponent,
    children: [
    { path: 'template', component: TemplateComponent },
    { path: 'reactive', component: ReactiveComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }