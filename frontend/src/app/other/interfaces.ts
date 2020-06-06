export interface PreCalificador {
    nombres: string,
    apellidos: string,
    dni: string,
    telefono: string,
    localidad: string,
    monto: number,
}

export interface Oportunidad {
    agenciaId: string,
    cargo: string,
    horario: string,
    sueldo: string,
    fechaInicio: string,
    beneficios: string,
    vacantes: number
}


export interface Postulante {
    nombres: string,
    apellidos: string,
    dni: string,
    correo: string,
    edad: number,
    telefono: string
    cv: any
}

export interface Reclamacion {
    socio: boolean,
    agencia: string,
    nombres: string,
    apellidos: string,
    tipoDocumento: string,
    numeroDocumento: string,
    direccion: string,
    departamento: string,
    provincia: string,
    distrito: string,
    telefono: string,
    correo: string,
    incidencia: string,
    producto: string,
    tipoReclamacion: string,
    detalleReclamacion: string
}