import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PicturesModule } from './pictures/pictures.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PicturesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
