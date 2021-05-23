import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBandComponent } from './pages/add-band/add-band.component';
import { CrudComponent } from './pages/crud/crud.component';
import { Error404Component } from './pages/error404/error404.component';

//Modules
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'new', component: AddBandComponent },
  { path: 'crud', component: CrudComponent },
  { path: '**', component: Error404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
