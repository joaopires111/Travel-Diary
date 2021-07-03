import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdiPageRoutingModule } from './pdi-routing.module';

import { PdiPage } from './pdi.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdiPageRoutingModule
  ],
  declarations: [PdiPage]
})
export class PdiPageModule {}
