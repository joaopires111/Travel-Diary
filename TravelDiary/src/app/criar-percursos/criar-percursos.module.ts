import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CriarPercursosPageRoutingModule } from './criar-percursos-routing.module';

import { CriarPercursosPage } from './criar-percursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CriarPercursosPageRoutingModule
  ],
  declarations: [CriarPercursosPage]
})
export class CriarPercursosPageModule {}
