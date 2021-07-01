import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhePercursoPageRoutingModule } from './detalhe-percurso-routing.module';

import { DetalhePercursoPage } from './detalhe-percurso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhePercursoPageRoutingModule
  ],
  declarations: [DetalhePercursoPage]
})
export class DetalhePercursoPageModule {}
