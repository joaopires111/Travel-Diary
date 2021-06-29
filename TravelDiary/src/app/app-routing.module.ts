import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pdi',
    loadChildren: () => import('./pdi/pdi.module').then( m => m.PdiPageModule)
  },
  {
    path: 'criar-pontos',
    loadChildren: () => import('./criar-pontos/criar-pontos.module').then( m => m.CriarPontosPageModule)
  },
  {
    path: 'percursos',
    loadChildren: () => import('./percursos/percursos.module').then( m => m.PercursosPageModule)
  },
  {
    path: 'criar-percursos',
    loadChildren: () => import('./criar-percursos/criar-percursos.module').then( m => m.CriarPercursosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
