import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { WebcamModule } from 'ngx-webcam';
import { CamaraComponent } from './components/camara/camara.component'


@NgModule({
  declarations: [
    AppComponent,
    CamaraComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
