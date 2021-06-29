import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarPontosPageRoutingModule } from './criar-pontos-routing.module';

import { CriarPontosPage } from './criar-pontos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarPontosPageRoutingModule
  ],
  declarations: [CriarPontosPage]
})
export class CriarPontosPageModule {}
