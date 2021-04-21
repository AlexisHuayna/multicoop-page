import { Component, OnInit, ViewChild } from '@angular/core';
import { departamentos, provincias, distritos } from '../../other/ubigeo';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReclamacionService } from 'src/app/services/reclamacion.service';
import { Reclamacion } from 'src/app/other/interfaces';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reclamaciones',
  templateUrl: './reclamaciones.component.html',
  styleUrls: ['./reclamaciones.component.css']
})
export class ReclamacionesComponent implements OnInit {
  
  departamentos = departamentos
  provincias = provincias
  distritos = distritos

  departamento_actual: string
  provincia_actual: string

  reclamacionesForm: FormGroup

  propsHelper = {mensaje : 'Estaremos en contacto.', titulo : null, ruta: '/'}


  constructor(
    private _builder: FormBuilder,
    private reclamacionService: ReclamacionService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.reclamacionesForm = this._builder.group({
      socio: [false,],
      agencia: ['01',],
      nombres: ['', Validators.compose([Validators.required])],
      apellidos: ['', Validators.compose([Validators.required])],
      tipoDocumento: ['dni', Validators.compose([Validators.required])],
      numeroDocumento: ['', Validators.compose([Validators.required, Validators.pattern('([0-9]{8}|[0-9]{12})')])],
      direccion: ['', Validators.compose([Validators.required])],
      departamento: ['',],
      provincia: ['',],
      distrito: ['',],
      telefono: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{9}')])],
      correo: ['', Validators.compose([Validators.required, Validators.email])],
      incidencia: ['', Validators.compose([Validators.required])],
      producto: ['', Validators.compose([Validators.required])],
      otrosProducto: [{ value: '', disabled: true },],
      tipoReclamacion: ['', Validators.compose([Validators.required])],
      detalleReclamacion: ['', Validators.compose([Validators.required])],
      condiciones: [false, Validators.compose([Validators.requiredTrue])],
      captcha: new FormControl(null, Validators.required)

    })
  }

  ngOnInit(): void {
  }

  getDepartamentos(): Array<string> {
    return Object.keys(departamentos)
  }

  getProvincias(dep) {
    return provincias[dep]
  }

  getDistritos(dep, prov) {
    return distritos[dep + prov]
  }

  updateProvincias(e) {
    var select_provincia = document.getElementById('selectProvincia')
    select_provincia.innerHTML = ''

    this.departamento_actual = e

    var i = 0

    for (let [prov_id, prov_value] of Object.entries(this.getProvincias(this.departamento_actual))) {
      select_provincia.appendChild(this.createOptionItem(prov_id, prov_value));
      if (i == 0) {
        this.updateDistritos(prov_id)
        this.reclamacionesForm.get('provincia').setValue(prov_id)

        i = i + 1
      }
    }
  }

  updateDistritos(e) {
    var select_distrito = document.getElementById('selectDistrito')

    select_distrito.innerHTML = '';

    this.provincia_actual = e

    var i = 0

    for (let [dist_id, dist_value] of Object.entries(this.getDistritos(this.departamento_actual, this.provincia_actual))) {
      select_distrito.appendChild(this.createOptionItem(dist_id, dist_value));
      if (i == 0) {
        this.reclamacionesForm.get('distrito').setValue(dist_id)
        i = i + 1

      }
    }
  }

  createOptionItem(id_content, content) {
    let option = document.createElement('option');
    option.value = id_content;
    option.textContent = content;
    return option
  }

  disableOtros() {
    this.reclamacionesForm.get('otrosProducto').disable()
  }

  enableOtros() {
    this.reclamacionesForm.get('otrosProducto').enable()
  }

  addReclamacion(reclamacion: Reclamacion): void {
    this.reclamacionService.addReclamacion(reclamacion).subscribe(
      res => {
        this._snackBar.open('Estaremos en contacto contigo', 'cerrar',{
          duration: 5000,
          verticalPosition: 'top'
        });
        this.router.navigate(['/']);
      },
      error => {
        this._snackBar.open('Ups! Ocurrio un error, vuelva ha intentarlo', 'cerrar',{
          duration: 5000,
          verticalPosition: 'top'
        });
        this.router.navigate(['/']);
      }
    )
  }

  reclamar(values): void {
    if (values['producto'] === 'otros') {
      values['producto'] = values['otrosProducto']
    }

    this.addReclamacion(<Reclamacion>values)
  }

  resolved(captchaResponse: string){
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

}
