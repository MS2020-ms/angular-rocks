import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

//Modules
import { SharedModule } from '../shared/shared.module';

//Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { Error404Component } from './error404/error404.component';
import { ListComponent } from './list/list.component';
import { PagesComponent } from './pages.component';
import { AddBandComponent } from './add-band/add-band.component';

@NgModule({
  declarations: [
    DashboardComponent,
    Error404Component,
    ListComponent,
    AddBandComponent,
    PagesComponent
  ],

  exports: [
    DashboardComponent,
    Error404Component,
    AddBandComponent,
    PagesComponent
  ],

  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule
  ]
})

export class PagesModule { }
