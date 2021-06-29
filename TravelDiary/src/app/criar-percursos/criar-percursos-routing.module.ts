import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CriarPercursosPage } from './criar-percursos.page';

const routes: Routes = [
  {
    path: '',
    component: CriarPercursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CriarPercursosPageRoutingModule {}
