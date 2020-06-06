import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Oportunidad } from 'src/app/other/interfaces';


@Component({
  selector: 'app-oportunidades',
  templateUrl: './oportunidades.component.html',
  styleUrls: ['./oportunidades.component.css']
})
export class OportunidadesComponent implements OnInit {

  @Output() oportunidadSeleccionada = new EventEmitter<Oportunidad>();

  oportunidades = [
    <Oportunidad> { 
      agenciaId: "1",
      cargo: "Analista",
      horario: "full time",
      sueldo: "1600",
      fechaInicio: "16-11-2020",
      beneficios: "planilla",
      vacantes: 5
    }, <Oportunidad> { 
      agenciaId: "2",
      cargo: "Programador",
      horario: "full time",
      sueldo: "1800",
      fechaInicio: "16-11-2020",
      beneficios: "planilla",
      vacantes: 2
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  selecionarOportunidad(oportunidad: Oportunidad){
    this.oportunidadSeleccionada.emit(oportunidad);
  }

}
