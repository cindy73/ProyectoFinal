import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pagina/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },  
  {
    path: 'populares',
    loadChildren: () => import('./pagina/populares/populares.module').then( m => m.PopularesPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./pagina/buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'estrenos',
    loadChildren: () => import('./pagina/estrenos/estrenos.module').then( m => m.EstrenosPageModule)
  },
  {
    path: 'cartelera',
    loadChildren: () => import('./pagina/cartelera/cartelera.module').then( m => m.CarteleraPageModule)
  },
  {
    path: 'buscar-persona',
    loadChildren: () => import('./pagina/buscar-persona/buscar-persona.module').then( m => m.BuscarPersonaPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
