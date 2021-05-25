import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

//Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { ListComponent } from './list/list.component';
import { PagesComponent } from './pages.component';
import { AddBandComponent } from './add-band/add-band.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  declarations: [
    DashboardComponent,
    Error404Component,
    ListComponent,
    AddBandComponent,
    CrudComponent,
    PagesComponent
  ],

  exports: [
    DashboardComponent,
    Error404Component,
    AddBandComponent,
    CrudComponent,
    PagesComponent,
    ListComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class PagesModule { }
