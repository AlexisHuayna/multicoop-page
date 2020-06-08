import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Oportunidad } from 'src/app/other/interfaces';

@Component({
  selector: 'app-oportunidad-detalles',
  templateUrl: './oportunidad-detalles.component.html',
  styleUrls: ['./oportunidad-detalles.component.css']
})
export class OportunidadDetallesComponent implements OnInit {

  @Input() oportunidad: Oportunidad
  @Output() listaOportunidades = new EventEmitter <Boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  mostrarListaOportunidades(){
    this.listaOportunidades.emit(true);
  }
}
