import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asesor, Especialidad } from '../modelos/asesor.model';

@Injectable()
export class AsesoresService {

  pathConsultarAsesores = 'http://localhost:8081/ventasTC/listar-asesores';
  pathEliminarAsesor = 'http://localhost:8081/ventasTC/eliminar-asesor/:idAsesor';
  pathConsultarEspecialidades = 'http://localhost:8081/ventasTC/listar-especialidades';
  pathGuardarAsesor = 'http://localhost:8081/ventasTC/guardar-asesor';

  constructor(private readonly http: HttpClient) { }

  consultarAsesores(): Observable<Asesor[]> {
   return this.http.get<Asesor[]>(this.pathConsultarAsesores);
  }

  eliminarAsesor(idAsesor: number): Observable<string> {
    return this.http.delete<string>(this.pathEliminarAsesor
    .replace(':idAsesor', idAsesor.toString()));
  }

  consultarEspecialidades(): Observable<Especialidad[]> {
    return this.http.get<Especialidad[]>(this.pathConsultarEspecialidades);
  }

  guardarAsesor(asesor: Asesor): Observable<number> {
    return this.http.post<number>(this.pathGuardarAsesor, asesor);
  }

}
