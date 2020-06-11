import { Component, OnInit } from '@angular/core';
import { Oportunidad } from 'src/app/other/interfaces';
import { agencias } from 'src/app/other/agencias';

@Component({
  selector: 'app-bolsa-trabajo',
  templateUrl: './bolsa-trabajo.component.html',
  styleUrls: ['./bolsa-trabajo.component.css']
})
export class BolsaTrabajoComponent implements OnInit {

  oportunidadSeleccionada: Oportunidad
  listaOportunidades: Boolean
  oportunidades = [
    <Oportunidad> { 
      agenciaId: "01",
      cargo: "Ejecutivo Comercial",
      horario: "full time",
      beneficios: "planilla",
      vacantes: 1,
      requisitos: "Técnico, Bachiller o Titulado en Economía, Contabilidad, administración, Ingeniería Industrial y carreras relacionadas.<br>\
      (06) meses de experiencia en el sector financiero como Promotor, Analista, Caja y cargos relacionados.<br>\
      Mantener una adecuada situación crediticia en el sistema financiero.",
      funciones: " Encargazdo de prospectar y buscar clientes potenciales a nivel corporativo y personal.<br>\
      Encargado de la comercialización y promoción de los productos de la empresa.<br>\
      Presentaciones de proyectos.<br>\
      Seguimiento de clientes.<br>\
      Capacidad de negociar y lograr cierres de contratos.<br>\
      Alcanzar sus objetivos y metas de comerciales.",
      competencias: "Comunicación efectiva\nOrientación al cliente\nTrabajo bajo presión"

    }, <Oportunidad> { 
      agenciaId: "02",
      cargo: "Programador",
      horario: "full time",
      beneficios: "planilla",
      vacantes: 2,
      requisitos: "requisitos",
      funciones: "funciones",
      competencias: "competencias"
    }
  ]

  constructor() {
    //Para castear de la base de datos
    for(let oportunidad of this.oportunidades){
      oportunidad['agenciaId'] = agencias[oportunidad['agenciaId']]
    }
  }

  ngOnInit(): void {
    this.listaOportunidades = true
  }

  actualizarOportunidad(oportunidad: Oportunidad){
    this.oportunidadSeleccionada = oportunidad
    this.listaOportunidades = false
  }

  mostrarListaOportunidades(estado: Boolean){
    this.listaOportunidades = estado
    this.oportunidadSeleccionada = undefined
  }

  getOportunidades(){
    // obtenemos oportunidades del servidor
  }

}
