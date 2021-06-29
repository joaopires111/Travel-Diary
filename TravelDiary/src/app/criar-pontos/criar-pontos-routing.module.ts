import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarPontosPage } from './criar-pontos.page';

const routes: Routes = [
  {
    path: '',
    component: CriarPontosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarPontosPageRoutingModule {}
