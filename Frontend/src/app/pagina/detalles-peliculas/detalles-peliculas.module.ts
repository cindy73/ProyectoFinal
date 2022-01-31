import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'

import { IonicModule } from '@ionic/angular';

import { DetallesPeliculasPageRoutingModule } from './detalles-peliculas-routing.module';

import { DetallesPeliculasPage } from './detalles-peliculas.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallesPeliculasPageRoutingModule,
    BrowserModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  declarations: [DetallesPeliculasPage]
})
export class DetallesPeliculasPageModule {}
