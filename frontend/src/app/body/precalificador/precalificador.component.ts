import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PreCalificador } from 'src/app/other/interfaces';
import { PrecalificadorService } from 'src/app/services/precalificador.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-precalificador',
  templateUrl: './precalificador.component.html',
  styleUrls: ['./precalificador.component.css']
})
export class PrecalificadorComponent implements OnInit {

  precalificadorForm: FormGroup
  propsHelper = {mensaje : 'Gracias por precalificar estaremos en contacto.', titulo : null, ruta: '/'}

  constructor(
    public precalificadorService: PrecalificadorService,
    private _builder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.precalificadorForm = this._builder.group({
      nombres: ['', Validators.compose([Validators.required])],
      apellidos: ['', Validators.compose([Validators.required])],
      dni: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{8}')])],
      telefono: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{9}')])],
      localidad: ['01', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      monto: ['', Validators.compose([Validators.required, Validators.pattern('([5-9][0-9]{2,}|[1-9][0-9]{3,})')])],
      captcha: new FormControl(null, Validators.required)
    })
  }

  onFormValid() {

  }

  ngOnInit(): void {
  }

  precalificar(values) {
    this.precalificadorService.addPrecalificador(<PreCalificador>values)
      .subscribe(response => {
        this._snackBar.open('Estaremos en contacto contigo', 'cerrar',{
          duration: 5000,
          verticalPosition: 'top'
        });
        this.router.navigate(['/']);
      }, err => {
        console.log()
      });
  }

  resolved(captchaResponse: string){
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

}
