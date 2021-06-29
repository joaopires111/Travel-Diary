import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PercursosPageRoutingModule } from './percursos-routing.module';

import { PercursosPage } from './percursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PercursosPageRoutingModule
  ],
  declarations: [PercursosPage]
})
export class PercursosPageModule {}
