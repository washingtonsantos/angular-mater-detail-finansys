import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // Remover quando for usar o backend externo
import { InMemoryDatabase } from "./in-memory-database"; // Remover quando for usar o backend externo

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDatabase) // Remover quando for usar o backend externo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
