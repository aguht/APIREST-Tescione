import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RenoRoutingModule } from './reno-routing.module';
import { ElectricComponent } from './electric/electric.component';
import { HybridComponent } from './hybrid/hybrid.component';
import { RenoComponent } from './reno/reno.component';


@NgModule({
  declarations: [
    ElectricComponent,
    HybridComponent,
    RenoComponent
  ],
  imports: [
    CommonModule,
    RenoRoutingModule
  ]
})
export class RenoModule { }
