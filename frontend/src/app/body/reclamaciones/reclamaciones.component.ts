import { Component, OnInit } from '@angular/core';
import { departamentos, provincias, distritos } from '../../other/ubigeo';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reclamaciones',
  templateUrl: './reclamaciones.component.html',
  styleUrls: ['./reclamaciones.component.css']
})
export class ReclamacionesComponent implements OnInit {

  private departamentos_actuales: string
  private provincias_actuales: string
  private distritos_actuales: string

  reclamacionesForm: FormGroup

  constructor(
    private _builder: FormBuilder
  ) {
    this.reclamacionesForm = this._builder.group({
      socio: ['',],
      agencia: ['', Validators.compose([Validators.required])],
      nombres: ['', Validators.compose([Validators.required])],
      apellidoPaterno: ['', Validators.compose([Validators.required])],
      apellidoMaterno: ['', Validators.compose([Validators.required])],
      tipoDocumento: ['', Validators.compose([Validators.required])],
      numeroDocumento: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{8}')])],
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
      detalleReclamacion: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit(): void {
  }

  getProvincias(dep) {
    return provincias[dep]
  }

  getDistritos(dep, prov) {
    return distritos[dep + prov]
  }

  createOptionItem(id_content, content) {
    let option = document.createElement('option');
    option.value = id_content;
    option.textContent = content;
    return option
  }

  /*
  updateProvincia() {

    var select_provincia = document.getElementById('selectProvincia')

    select_provincia.innerHTML = '';


    var select_departamento = document.getElementById('selectDepartamento')
    var id_dep = select_departamento.value;

    for (let prov in getProvincias(id_dep)) {
      select_provincia.appendChild(createOptionItem(prov, provincias[id_dep][prov]));
    }

    updateDistrito();

  }

  updateDistrito() {
    var select_distrito = document.getElementById('selectDistrito')

    select_distrito.innerHTML = '';

    var select_departamento = document.getElementById('selectDepartamento')
    var id_dep = select_departamento.value

    var select_provincia = document.getElementById('selectProvincia')
    var id_prov = select_provincia.value

    for (let dist in getDistritos(id_dep, id_prov)) {
      select_distrito.appendChild(createOptionItem(dist, distritos[id_dep + id_prov][dist]))
    }
  }*/


  addReclamacion(reclamacion): void {

  }

  reclamar(values): void {
    console.log(values)
    this.addReclamacion(values)
  }

}
