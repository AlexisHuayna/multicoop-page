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
  
  oportunidades = [/*
    <Oportunidad> { 
      agenciaId: "00",
      cargo: "Ejecutivo Comercial",
      horario: "Remoto",
      beneficios: ["Planilla"],
      vacantes: 1,
      requisitos: ["Técnico, Bachiller o Titulado en Economía, Contabilidad, administración, Ingeniería Industrial y carreras relacionadas.",
        "(06) meses de experiencia en el sector financiero como Promotor, Analista, Caja y cargos relacionados.",
        "Mantener una adecuada situación crediticia en el sistema financiero."],
      funciones: [" Encargazdo de prospectar y buscar clientes potenciales a nivel corporativo y personal.",
        "Encargado de la comercialización y promoción de los productos de la empresa.",
        "Presentaciones de proyectos.",
        "Seguimiento de clientes.",
        "Capacidad de negociar y lograr cierres de contratos.",
        "Alcanzar sus objetivos y metas de comerciales."],
      competencias: ["Comunicación efectiva",
        "Orientación al cliente",
        "Trabajo bajo presión"]

    }*/
    ]
   

  constructor() {
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
