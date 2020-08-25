import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Oportunidad } from 'src/app/other/interfaces';

@Component({
  selector: 'app-oportunidades',
  templateUrl: './oportunidades.component.html',
  styleUrls: ['./oportunidades.component.css']
})
export class OportunidadesComponent implements OnInit {

  @Output() oportunidadSeleccionada = new EventEmitter<Oportunidad>();
  @Input('estado') mostrarOportunidades: Boolean;
  @Input('oportunidades') oportunidades: Array<Oportunidad>;

  constructor() { }

  ngOnInit(): void {
  }

  selecionarOportunidad(oportunidad: Oportunidad){
    this.oportunidadSeleccionada.emit(oportunidad);
  }

}
