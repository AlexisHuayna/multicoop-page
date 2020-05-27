import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oportunidades',
  templateUrl: './oportunidades.component.html',
  styleUrls: ['./oportunidades.component.css']
})
export class OportunidadesComponent implements OnInit {

  oportunidades = [
    { 
      agencia: 'Arequipa',
      puesto: 'Asesor de negocios',
      tipo: 'Full time',
      vacantes: 4
    }, {
      agencia: 'Ayaviri',
      puesto: 'Gerente',
      tipo: 'Full time',
      vacantes: 1
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
