import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NorenoRoutingModule } from './noreno-routing.module';
import { GasComponent } from './gas/gas.component';
import { DieselComponent } from './diesel/diesel.component';
import { NorenoComponent } from './noreno/noreno.component';


@NgModule({
  declarations: [
    GasComponent,
    DieselComponent,
    NorenoComponent
  ],
  imports: [
    CommonModule,
    NorenoRoutingModule
  ]
})
export class NorenoModule { }
