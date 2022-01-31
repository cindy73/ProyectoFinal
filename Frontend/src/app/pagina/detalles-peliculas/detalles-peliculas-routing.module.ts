import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesPeliculasPage } from './detalles-peliculas.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesPeliculasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesPeliculasPageRoutingModule {}
