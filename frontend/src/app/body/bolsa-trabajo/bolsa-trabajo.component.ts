import { Component, OnInit } from '@angular/core';
import { Oportunidad } from 'src/app/other/interfaces';

@Component({
  selector: 'app-bolsa-trabajo',
  templateUrl: './bolsa-trabajo.component.html',
  styleUrls: ['./bolsa-trabajo.component.css']
})
export class BolsaTrabajoComponent implements OnInit {

  oportunidadSeleccionada: Oportunidad

  constructor() { }

  ngOnInit(): void {
  }

  actualizarOportunidad(oportunidad: Oportunidad){
    this.oportunidadSeleccionada = oportunidad
  }

}
