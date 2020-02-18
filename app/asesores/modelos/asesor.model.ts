export interface Asesor {
    idAsesor: number;
    nombre: string;
    especialidad: Especialidad;
}

export interface Especialidad {
    idEspecialidad: number;
    descripcion: string;
}
