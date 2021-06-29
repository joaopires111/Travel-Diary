import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PercursosPage } from './percursos.page';

const routes: Routes = [
  {
    path: '',
    component: PercursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PercursosPageRoutingModule {}
