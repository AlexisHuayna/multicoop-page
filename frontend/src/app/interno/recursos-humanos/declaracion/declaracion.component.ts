import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  public opcionFamiliar = " "
  public opcion

  public padresLista = []
  public hijosLista = []
  public suegrosLista = []
  public yernosLista = []
  public abuelosLista = [ <Familiar>{
    nombresApellidos: "pepito mendez",
    dni: "12345678",
    ocupacion: "doctor",
    pertenencia: "abuelosLista"
    }
  ]
  public hermanosLista = []
  public nietosLista = []
  public cunadosLista = []

  constructor(private builder: FormBuilder,
    private fichaService: FichaSintomasService,
    private router: Router,
    private route: ActivatedRoute) {
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
    console.log(data)
  }

  addFamiliar(event){

    let familiar = <Familiar>{}
    
    if( this.opcion === 1){
      console.log("Padres")
      this.padresLista.push(familiar)
    }else if( this.opcion === 2 ){
      console.log("hijos")
      this.hijosLista.push(familiar)
    }else if( this.opcion === 3 ){      
      console.log("suegros")
      this.suegrosLista.push(familiar)
    }else if (this.opcion === 4 ){  
      console.log("yernos")
      this.yernosLista.push(familiar)
    }else if( this.opcion === 5 ){
      console.log("abuelos")
      this.abuelosLista.push(familiar)
    }else if( this.opcion === 6 ){
      console.log("hermanos")
      this.hermanosLista.push(familiar)
    }else if( this.opcion === 7 ){
      console.log("nietos")
      this.nietosLista.push(familiar)
    }else {
      console.log("cunados")
      this.cunadosLista.push(familiar)
    }

    this.closeForm(null);
  }



  closeForm(event) {
    let modal = document.getElementById("formAdd");

    modal.style.display = "none";
  }

  removeFamiliar(familiar) {
    
    this.abuelosLista.splice(familiar, 1);
  }
}
