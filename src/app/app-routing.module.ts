import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home', canActivate: [AuthGuard], component:HomeComponent},
  {path:'noreno', canActivate: [AuthGuard], loadChildren:()=>import('./noreno/noreno.module').then((m)=>m.NorenoModule)},
  {path:'reno', canActivate: [AuthGuard], loadChildren:()=>import('./reno/reno.module').then((m)=>m.RenoModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
