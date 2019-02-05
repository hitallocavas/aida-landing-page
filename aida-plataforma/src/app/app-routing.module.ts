import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ClientesComponent } from './views/clientes/clientes.component';
import { PrestadoresComponent } from './views/prestadores/prestadores.component';
import { InicioComponent } from './views/inicio/inicio.component';

const routes:Routes = [
  {path:'',component:HomeComponent
  ,children:[
    {
      path:'',
      component:InicioComponent
    },
    {
      path:'inicio',
      component:InicioComponent
    },
    {
      path:'prestadores',
      component:PrestadoresComponent,
    },
    {
      path:'clientes',
      component:ClientesComponent, 
    }
  ]
  },
 
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
