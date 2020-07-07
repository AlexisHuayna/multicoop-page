import { Component, OnInit, ViewChild } from '@angular/core';
import { departamentos, provincias, distritos } from '../../other/ubigeo';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ReclamacionService } from 'src/app/services/reclamacion.service';
import { Reclamacion } from 'src/app/other/interfaces';
import { Router } from '@angular/router';
import { HelpersComponent } from 'src/app/helpers/helpers.component';

@Component({
  selector: 'app-reclamaciones',
  templateUrl: './reclamaciones.component.html',
  styleUrls: ['./reclamaciones.component.css']
})
export class ReclamacionesComponent implements OnInit {

  @ViewChild(HelpersComponent)
  private mensajeExito: HelpersComponent;
  
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
    private router: Router
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
      condiciones: [false, Validators.compose([Validators.requiredTrue])]
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
    this.reclamacionService.addReclamacion(reclamacion)
  }

  reclamar(values): void {
    if (values['producto'] === 'otros') {
      values['producto'] = values['otrosProducto']
    }

    this.addReclamacion(<Reclamacion>values)
    this.mensajeExito.show();

  }

}
