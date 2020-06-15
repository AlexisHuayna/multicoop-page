import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedimiento-atencion',
  templateUrl: './procedimiento-atencion.component.html',
  styleUrls: ['./procedimiento-atencion.component.css']
})
export class ProcedimientoAtencionComponent implements OnInit {

  pdfSrc = '../../../../assets/docs/procedimiento_atencion_reclamos_quejas.pdf'

  constructor() { }

  ngOnInit(): void {
  }

}
