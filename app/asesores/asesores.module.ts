import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesoresRoutingModule } from './asesores-routing.module';
import { AsesoresComponent } from './componentes-asesores/asesores/asesores.component';
import { FormularioAsesoresComponent } from './componentes-asesores/formulario-asesores/formulario-asesores/formulario-asesores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesComponent } from './clientes/clientes/clientes.component';


@NgModule({
  declarations: [AsesoresComponent, FormularioAsesoresComponent, ClientesComponent],
  imports: [
    CommonModule,
    AsesoresRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AsesoresModule { }
