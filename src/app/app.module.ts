import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Modules
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

//Components
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
