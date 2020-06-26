import { Component, OnInit } from '@angular/core';
import { Oportunidad } from 'src/app/other/interfaces';
import { OportunidadesService } from 'src/app/services/oportunidades.service';

@Component({
  selector: 'app-bolsa-trabajo',
  templateUrl: './bolsa-trabajo.component.html',
  styleUrls: ['./bolsa-trabajo.component.css']
})
export class BolsaTrabajoComponent implements OnInit {

  oportunidadSeleccionada: Oportunidad
  listaOportunidades: Boolean
  
  oportunidades = []
   

  constructor(private oportunidadesService: OportunidadesService) {
  }

  ngOnInit(): void {
    this.getOportunidades();
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
    this.oportunidadesService.getOportunidades().subscribe((oportunidadesList: Oportunidad[]) => {
      oportunidadesList.forEach(oportunidad => {
        oportunidad['requisitos'] = (<any>oportunidad['requisitos']).split('|');
        oportunidad['beneficios'] = (<any>oportunidad['beneficios']).split('|') ;
        oportunidad['funciones'] = (<any>oportunidad['funciones']).split('|'); 
        oportunidad['competencias'] = (<any>oportunidad['competencias']).split('|');
      });

      this.oportunidades = oportunidadesList
    });
  }

}
