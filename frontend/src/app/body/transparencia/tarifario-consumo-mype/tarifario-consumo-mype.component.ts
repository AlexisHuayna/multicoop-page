import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarifario-consumo-mype',
  templateUrl: './tarifario-consumo-mype.component.html',
  styleUrls: ['./tarifario-consumo-mype.component.css']
})
export class TarifarioConsumoMypeComponent implements OnInit {

  pdfSrc = '../../../../assets/docs/tarifario_prestamo_consumo_mype.pdf'

  constructor() { }

  ngOnInit(): void {
  }

}
