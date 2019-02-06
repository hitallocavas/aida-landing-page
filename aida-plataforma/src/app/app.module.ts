import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { RouterModule } from '@angular/router';
import { ClientesComponent } from './views/clientes/clientes.component';
import { PrestadoresComponent } from './views/prestadores/prestadores.component';
import { InicioComponent } from './views/inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { AidaServiceComponent } from './aida-service/aida-service.component';
import {RatingModule} from 'primeng/rating';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    PrestadoresComponent,
    InicioComponent,
    AidaServiceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RatingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
