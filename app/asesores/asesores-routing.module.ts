import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsesoresComponent } from './componentes-asesores/asesores/asesores.component';


const routes: Routes = [
  {
    path: '',
    component: AsesoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesoresRoutingModule { }
