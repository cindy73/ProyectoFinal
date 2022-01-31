import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './componentes/menu/menu.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetallesPeliculasPageModule } from './pagina/detalles-peliculas/detalles-peliculas.module';







@NgModule({
  declarations: [AppComponent, MenuComponent, PerfilComponent, ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, CommonModule, FormsModule, DetallesPeliculasPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  exports: [MenuComponent, PerfilComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}