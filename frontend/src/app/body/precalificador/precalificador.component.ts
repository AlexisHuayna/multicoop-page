import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-precalificador',
  templateUrl: './precalificador.component.html',
  styleUrls: ['./precalificador.component.css']
})
export class PrecalificadorComponent implements OnInit {

  precalificadorForm: FormGroup

  constructor(
    private _api: ApiService,
    private _builder: FormBuilder
  ) {
    this.precalificadorForm = this._builder.group({
      nombres: ['', Validators.compose([Validators.required])],
      apellidos: ['', Validators.compose([Validators.required])],
      dni: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{8}')])],
      telefono: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{9}')])],
      localidad: ['01', Validators.compose([Validators.required])],
      monto: ['', Validators.compose([Validators.required, Validators.pattern('([5-9][0-9]{2,}|[1-9][0-9]{3,})')])]
    })
  }

  onFormValid(){

  }

  ngOnInit(): void {
  }

  addPreCalificador(precalificador) {
    //get data from formulario

    //this._api.addPreCalificador()
  }

  precalificar(values) {
    this.addPreCalificador(values)
    console.log(values)
  }

}
