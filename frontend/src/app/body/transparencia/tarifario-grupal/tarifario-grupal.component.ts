import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarifario-grupal',
  templateUrl: './tarifario-grupal.component.html',
  styleUrls: ['./tarifario-grupal.component.css']
})
export class TarifarioGrupalComponent implements OnInit {

  pdfSrc = '../../../../assets/docs/tarifario_grupal.pdf'

  constructor() { }

  ngOnInit(): void {
  }

}
