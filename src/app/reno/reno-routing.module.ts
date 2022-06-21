import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectricComponent } from './electric/electric.component';
import { HybridComponent } from './hybrid/hybrid.component';
import { RenoComponent } from './reno/reno.component';

const routes: Routes = [
  {path:'',
  component:RenoComponent,
  children:[
    {path:'electric', component:ElectricComponent}, 
    {path:'hybrid', component:HybridComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RenoRoutingModule { }
