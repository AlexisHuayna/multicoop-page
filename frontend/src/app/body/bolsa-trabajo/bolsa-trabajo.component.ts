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
      cargo: "Analista",
      horario: "full time",
      sueldo: "1600",
      fechaInicio: "16-11-2020",
      beneficios: "planilla",
      vacantes: 5
    }, <Oportunidad> { 
      agenciaId: "02",
      cargo: "Programador",
      horario: "full time",
      sueldo: "1800",
      fechaInicio: "16-11-2020",
      beneficios: "planilla",
      vacantes: 2
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
