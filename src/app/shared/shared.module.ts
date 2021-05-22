import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  //I export it in case I need these components outside of this module (shared.module.ts) 
  exports: [
    HeaderComponent,
    FooterComponent
  ],

  imports: [
    CommonModule,
    RouterModule
  ]
})

export class SharedModule { }
