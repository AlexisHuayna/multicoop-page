export interface PreCalificador {
    nombres: string,
    apellidos: string,
    dni: string,
    telefono: string,
    localidad: string,
    monto: number,
}

export interface Oportunidad {
    codigo: string,
    cargo: string,
    horario: string,
    beneficios: Array<string>,
    vacantes: number,
    requisitos: Array<string>,
    funciones: Array<string>,
    competencias: Array<string>
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

export interface ServerInformation {
    time?: string,
    date?: string,
}

export interface FichaCabecera {
    data?: FichaDetail[];
}

export interface FichaDetail {
    colaborador?: Colaborador,
    ficha?: Ficha,
    respuesta?: Respuesta,
}

export interface Respuesta {
    id?: number,
    idFicha?: number,
    nombrePregunta?: string,
    respuestaPregunta?: string,
    detalle?: string,
}

export interface Colaborador {
    id?: number,
    nombresApellidos?: string,
    area?: string,
    dni?: string,
    direccion?: string,
    celular?: string,
}

/*
export interface Ficha {
    id?: number,
    idColaborador?: number,
    fecha?: string,
    detalle?: string,
}
*/

export interface Personal {
    id?: number,
    idAgencia?: number,
    apellidoPaterno?: string,
    apellidoMaterno?: string,
    nombres?: string,
    dni?: string,
    cargo?: string,
    area?: string,
    celular?: string,
    direccion?: string,
}

export interface PersonalFicha {
    id?: number,
    idAgencia?: number,
    apellidoPaterno?: string,
    apellidoMaterno?: string,
    nombres?: string,
    dni?: string,
    cargo?: string,
    area?: string,
    celular?: string,
    direccion?: string,
    idFicha?: number,
}


export interface Ficha {
    
}