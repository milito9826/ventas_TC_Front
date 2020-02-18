import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Especialidad, Asesor } from '../../../modelos/asesor.model';

@Component({
  selector: 'app-formulario-asesores',
  templateUrl: './formulario-asesores.component.html',
  styleUrls: ['./formulario-asesores.component.css']
})
export class FormularioAsesoresComponent implements OnInit, AfterViewInit {

  form: FormGroup;
  @Input() especialidades: Especialidad[];
  @Input() asesorFormulario: Asesor;
  @Input() esEditar: boolean;
  @Input() esAgregar: boolean;
  @Input() mostrarFormulario = false;

  @Output() readonly guardarAsesoremit: EventEmitter<Asesor> = new EventEmitter();

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.bloquearIdAsesorSiEsEditar();
    this.siNoEsEditarDejarLosCamposVacios();
  }

  ngAfterViewInit(): void {
  }

  crearFormulario(): void {
    this.form = this.fb.group({
      idAsesor: this.fb.control(undefined, [Validators.required]),
      nombre: this.fb.control(undefined, [Validators.required]),
      especialidad: this.fb.control(undefined, [Validators.required]),
    });
  }

  bloquearIdAsesorSiEsEditar(): void {
    if (this.esEditar && !this.esAgregar) {
      this.form.get('idAsesor').setValue(this.asesorFormulario.idAsesor);
      this.form.get('nombre').setValue(this.asesorFormulario.nombre);
      this.form.get('especialidad').setValue(this.asesorFormulario.especialidad);
      this.form.get('idAsesor').disable();
    }
  }

  siNoEsEditarDejarLosCamposVacios(): void {
    if (!this.esEditar && this.esAgregar) {
      this.form.reset();
    }
  }

  guardarAsesor(): void {
    if (this.form.valid) {
      const especialidadFormulario = this.form.get('especialidad').value;
      const respuestaEspecialidad = this.retornarEspecialidad(Number(especialidadFormulario));
      this.form.get('especialidad').setValue(respuestaEspecialidad);
      this.guardarAsesoremit.emit(this.form.getRawValue());
    }
  }

  retornarEspecialidad(especialidadFormulario: number): Especialidad {
    return this.especialidades.find(esp => esp.idEspecialidad === especialidadFormulario);
  }


}
