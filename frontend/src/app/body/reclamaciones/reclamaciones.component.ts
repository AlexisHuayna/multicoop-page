import { Component, OnInit } from '@angular/core';
import { departamentos, provincias, distritos } from '../../other/ubigeo';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

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

  constructor(
    private _builder: FormBuilder
  ) {
    this.reclamacionesForm = this._builder.group({
      socio: [false,],
      agencia: ['01', Validators.compose([Validators.required])],
      nombres: ['', Validators.compose([Validators.required])],
      apellidos: ['', Validators.compose([Validators.required])],
      tipoDocumento: ['dni', Validators.compose([Validators.required])],
      numeroDocumento: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{8}|[0-9]{12}')])],
      direccion: ['', Validators.compose([Validators.required])],
      departamento: ['', Validators.compose([Validators.required])],
      provincia: ['', Validators.compose([Validators.required])],
      distrito: ['', Validators.compose([Validators.required])],
      telefono: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{9}')])],
      correo: ['', Validators.compose([Validators.required, Validators.email])],
      incidencia: ['', Validators.compose([Validators.required])],
      producto: ['', Validators.compose([Validators.required])],
      otrosProducto: [{ value: '', disabled: true }, Validators.compose([Validators.required])],
      tipoReclamacion: ['', Validators.compose([Validators.required])],
      detalleReclamacion: ['', Validators.compose([Validators.required])],
      condiciones: [false, Validators.compose([Validators.required])]
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
        i = i + 1
      }
    }
  }

  updateDistritos(e) {
    var select_distrito = document.getElementById('selectDistrito')

    select_distrito.innerHTML = '';

    this.provincia_actual = e

    for (let [dist_id, dist_value] of Object.entries(this.getDistritos(this.departamento_actual, this.provincia_actual))) {
      select_distrito.appendChild(this.createOptionItem(dist_id, dist_value));
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

  addReclamacion(reclamacion): void {

  }

  reclamar(values): void {
    console.log(values)
    this.addReclamacion(values)
  }

}
