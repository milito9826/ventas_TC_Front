import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'asesores',
    loadChildren: './asesores/asesores.module#AsesoresModule'
  },
  {
    path: '',
    redirectTo: 'asesores',
    pathMatch: 'full'
  }
  // },
  // {
  //   path: 'clientes',
  //   loadChildren: './asesores/clientes/modules/clientes/clientes.module#ClientesRoutingModule'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
