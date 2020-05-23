export interface PreCalificador {
    nombres: string,
    apellidos: string,
    dni: string,
    telefono: string,
    localidad: string,
    monto: number,
}

export interface Postulante {
    nombres: string,
    apellidos: string,
    dni: string,
    correo: string,
    edad: number,
    telefono: string

}

export interface Reclamacion {
    socio: number,
    agencia: string,
    nombres: string,
    apellido_paterno: string,
    apellido_materno: string,
    tipo_documento: string,
    numero_documento: string,
    direccion: string,
    departamento: string,
    provincia: string,
    distrito: string,
    telefono: string,
    correo: string,
    fecha_incidencia: string,
    producto: string,
    tipo_reclamacion: string,
    detalle_reclamacion: string
}