import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DieselComponent } from './diesel/diesel.component';
import { GasComponent } from './gas/gas.component';
import { NorenoComponent } from './noreno/noreno.component';

const routes: Routes = [
  {path:'noreno',
  component:NorenoComponent,
  children:[
    {path:'diesel', component:DieselComponent},
    {path:'gas', component:GasComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NorenoRoutingModule { }
