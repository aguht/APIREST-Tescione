import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RenoRoutingModule } from './reno/reno-routing.module';
import { NorenoRoutingModule } from './noreno/noreno-routing.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginRoutingModule } from './login/login-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RenoRoutingModule,
    NorenoRoutingModule,
    LoginRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
