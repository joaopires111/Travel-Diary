import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhePercursoPage } from './detalhe-percurso.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhePercursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhePercursoPageRoutingModule {}
