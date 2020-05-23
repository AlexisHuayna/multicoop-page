import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-precalificador',
  templateUrl: './precalificador.component.html',
  styleUrls: ['./precalificador.component.css']
})
export class PrecalificadorComponent implements OnInit {

  constructor(
    private _api: ApiService,

  ) { }

  ngOnInit(): void {
  }

  addPreCalificador() {
    //get data from formulario

    //this._api.addPreCalificador()

  }

}
