import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './list/list.component';


const childRoutes: Routes = [
  //para enviar parametros o argumentos por la ruta -> propiedad 'data'
  { path: '', component: ListComponent, data: { titulo: 'List' } },
  { path: ':bandId', component: DashboardComponent, data: { titulo: 'Detail' } },
]

@NgModule({
  declarations: [],
  //imports y exports:
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
