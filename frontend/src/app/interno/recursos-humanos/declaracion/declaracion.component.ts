import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Familiar } from 'src/app/other/interfaces';
import { FichaSintomasService } from 'src/app/services/ficha-sintomas.service';

@Component({
  selector: 'app-declaracion',
  templateUrl: './declaracion.component.html',
  styleUrls: ['./declaracion.component.css']
})
export class DeclaracionComponent implements OnInit {

  public declaracionForm: FormGroup
  public opcionFamiliar = ''
  public opcion

  public familiares = []
  public familiarNombresApellidos
  public familiarDni
  public familiarOcupacion

  public padresLista = []
  public hijosLista = []
  public suegrosLista = []
  public yernosLista = []
  public abuelosLista = []
  public hermanosLista = []
  public nietosLista = []
  public cunadosLista = []

  constructor(private builder: FormBuilder,
    private fichaService: FichaSintomasService,
    private router: Router,
    private route: ActivatedRoute) {

      this.familiarNombresApellidos = ''
      this.familiarDni = ''
      this.familiarOcupacion = ''

      this.declaracionForm = this.builder.group({
        nombresApellidos: ['', Validators.compose([Validators.required])],
        dni: ['', Validators.compose([Validators.required])],
        departamento: ['', Validators.compose([Validators.required])],
        provincia: ['', Validators.compose([Validators.required])],
        distrito: ['', Validators.compose([Validators.required])],
        direccion: ['', Validators.compose([Validators.required])]
      });
    }

  ngOnInit(): void {
  }

  add(evt) {
    let opcion = evt.target.id
    let modal = document.getElementById("formAdd");

    if(opcion === "padres"){
      this.opcionFamiliar = "Padre/Madre"
      this.opcion = 1
    }

    if(opcion === "hijos"){
      this.opcionFamiliar = "Hijos"
      this.opcion = 2
    }

    if(opcion === "suegros"){
      this.opcionFamiliar = "Suegros"
      this.opcion = 3
    }

    if(opcion === "yernos"){
      this.opcionFamiliar = "Yerno/Nuera"
      this.opcion = 4
    }

    if(opcion === "abuelos"){
      this.opcionFamiliar = "Abuelos"
      this.opcion = 5
    }

    if(opcion === "hermanos"){
      this.opcionFamiliar = "Hermanos"
      this.opcion = 6
    }

    if(opcion === "nietos"){
      this.opcionFamiliar = "Nietos"
      this.opcion = 7
    }

    if(opcion === "cunados"){
      this.opcionFamiliar = "Cuñados"
      this.opcion = 8
    }

    modal.style.display = "block"

  }

  enviar(data) {

    this.padresLista.forEach(
      familiar  => {
        familiar.relacion = 'padres'
        this.familiares.push(familiar)
      }
    );

    this.hijosLista.forEach(
      familiar  => {
        familiar.relacion = 'hijos'
        this.familiares.push(familiar)
      }
    );

    this.suegrosLista.forEach(
      familiar  => {
        familiar.relacion = 'suegros'
        this.familiares.push(familiar)
      }
    )

    this.yernosLista.forEach(
      familiar  => {
        familiar.relacion = 'yernos'
        this.familiares.push(familiar)
      }
    )

    this.abuelosLista.forEach(
      familiar  => {
        familiar.relacion = 'abuelos'
        this.familiares.push(familiar)
      }
    )

    this.hermanosLista.forEach(
      familiar  => {
        familiar.relacion = 'hermanos'
        this.familiares.push(familiar)
      }
    )
    
    this.nietosLista.forEach(
      familiar  => {
        familiar.relacion = 'nietos'
        this.familiares.push(familiar)
      }
    )

    this.cunadosLista.forEach(
      familiar  => {
        familiar.relacion = 'cunados'
        this.familiares.push(familiar)
      }
    )

    data.familiares = this.familiares
    
    console.log(data)
    
    this.fichaService.crearDeclaracion(data).subscribe(
      res => {}
    )
    
  }

  addFamiliar(event){

    let familiar = <Familiar>{
      nombresApellidos: this.familiarNombresApellidos,
      dni: this.familiarDni,
      ocupacion: this.familiarOcupacion
    }
    
    if( this.opcion === 1){
      this.padresLista.push(familiar)
    }else if( this.opcion === 2 ){
      this.hijosLista.push(familiar)
    }else if( this.opcion === 3 ){      
      this.suegrosLista.push(familiar)
    }else if (this.opcion === 4 ){  
      this.yernosLista.push(familiar)
    }else if( this.opcion === 5 ){
      this.abuelosLista.push(familiar)
    }else if( this.opcion === 6 ){
      this.hermanosLista.push(familiar)
    }else if( this.opcion === 7 ){
      this.nietosLista.push(familiar)
    }else {
      this.cunadosLista.push(familiar)
    }

    this.closeForm(null);
  }

  closeForm(event) {
    let modal = document.getElementById("formAdd");

    modal.style.display = "none";

    this.familiarOcupacion = ''
    this.familiarNombresApellidos = ''
    this.familiarDni = ''
  }

  removeFamiliar(familiar) {
    this.abuelosLista.splice(familiar, 1);
  }

}
