import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PreCalificador } from 'src/app/other/interfaces';
import { PrecalificadorService } from 'src/app/services/precalificador.service';
import { Router } from '@angular/router';
import { HelpersComponent } from 'src/app/helpers/helpers.component';

@Component({
  selector: 'app-precalificador',
  templateUrl: './precalificador.component.html',
  styleUrls: ['./precalificador.component.css']
})
export class PrecalificadorComponent implements OnInit {

  @ViewChild(HelpersComponent)
  private mensajeExito: HelpersComponent;

  precalificadorForm: FormGroup
  propsHelper = {mensaje : 'Gracias por precalificar estaremos en contacto.', titulo : null, ruta: '/'}

  constructor(
    public precalificadorService: PrecalificadorService,
    private _builder: FormBuilder
  ) {
    this.precalificadorForm = this._builder.group({
      nombres: ['', Validators.compose([Validators.required])],
      apellidos: ['', Validators.compose([Validators.required])],
      dni: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{8}')])],
      telefono: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{9}')])],
      localidad: ['01', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      monto: ['', Validators.compose([Validators.required, Validators.pattern('([5-9][0-9]{2,}|[1-9][0-9]{3,})')])]
    })
  }

  onFormValid() {

  }

  ngOnInit(): void {
  }

  addPreCalificador(precalificador: PreCalificador) {
    this.precalificadorService.addPrecalificador(precalificador).subscribe(response => console.log(), err => console.log());
  }

  precalificar(values) {
    this.addPreCalificador(<PreCalificador>values)
    this.mensajeExito.show();
  }

  resolved(captchaResponse: string){
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

}
