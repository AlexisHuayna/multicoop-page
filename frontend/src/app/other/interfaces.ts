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
    id?: number,
    idPersonal?: number,
    estado?: number,
    hora?: string,
    fecha?: string,
    detalle?: string,
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
    ficha: FichaCabecera,
    respuestas: Respuesta[],   
}

export interface Evaluacion {
    idPersonal: number,
    tipo: string,
    p1: string,
    p2: string,
    p3: string,
    p4: string,
    p5: string,
    p6: string,
    p7: string,
    p8: string,
    p9: string,
    p10: string,
    p11: string,
    p12: string,
    p13: string,
    p14: string,
    p15: string,
    p16: string,
    p17: string,
    p18: string,
    p19: string,
    p20: string,
}
