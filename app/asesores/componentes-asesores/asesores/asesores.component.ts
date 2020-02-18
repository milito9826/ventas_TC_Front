import { Component, OnInit } from '@angular/core';
import { AsesoresService } from '../../servicios/asesores.service';
import { Asesor, Especialidad } from '../../modelos/asesor.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asesores',
  templateUrl: './asesores.component.html',
  styleUrls: ['./asesores.component.css']
})
export class AsesoresComponent implements OnInit {

  listaAsesores: Asesor[] = [];
  listaEspecialidades: Especialidad[] = [];
  esEditar = false;
  esAgregar = false;
  asesorFormulario: Asesor;
  mostrarFormulario = false;

  constructor(
    private readonly asesoresService: AsesoresService
  ) { }


  ngOnInit(): void {
    this.listarAsesores();
    this.consultarEspecialidadesAsesor();
  }

  listarAsesores(): void {
    this.asesoresService.consultarAsesores().subscribe((asesores: Asesor[]) => {
      this.listaAsesores = asesores;
    }, _ => Swal.fire('Error', 'No se pudo consultar los asesores', 'error'));
  }

  eliminarAsesor(asesor: Asesor): void {
    this.asesoresService.eliminarAsesor(asesor.idAsesor).subscribe((resultado: string) => {
      Swal.fire('Exito', 'Se elimino con exito', 'success');
      this.listarAsesores();
    });
  }

  editarAsesor(asesor: Asesor): void {
    this.esEditar = true;
    this.esAgregar = false;
    this.mostrarFormulario = true;
    this.asesorFormulario = asesor;
  }

  registrarAsesor(asesor: Asesor): void {
    this.esEditar = false;
    this.esAgregar = true;
    this.mostrarFormulario = true;
  }

  consultarEspecialidadesAsesor(): void {
    this.asesoresService.consultarEspecialidades().subscribe((especialidades: Especialidad[]) => {
      this.listaEspecialidades = especialidades;
    }, _ => Swal.fire('Error', 'No se pudo consultar las especialidades', 'error'));
  }

  onGuardarAsesor(asesor: Asesor): void {
    this.asesoresService.guardarAsesor(asesor).subscribe((respuesta: number) => {
      Swal.fire('Exito', 'Se guardo el asesor correctamente', 'success');
    }, _ => Swal.fire('Error', 'No se pudo guardar el asesor', 'error'));
  }

}
