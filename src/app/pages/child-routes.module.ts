import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';


const childRoutes: Routes = [
  //para enviar parametros o argumentos por la ruta -> propiedad 'data'
  { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
]

@NgModule({
  declarations: [],
  //imports y exports:
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ChildRoutesModule { }
