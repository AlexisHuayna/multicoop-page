import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Familiar } from 'src/app/other/interfaces';
import { FichaSintomasService } from 'src/app/services/ficha-sintomas.service';
import { PdfMakeWrapper, Txt} from 'pdfmake-wrapper';

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
  public conyugue = []

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

    if(opcion == "conyugue" ) {
      this.opcionFamiliar = 'Conyugue'
      this.opcion = 0
    }

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
    
    let modal = document.getElementById("formAdd");
    modal.style.
    
    display = "block"

  }

  enviar(data) {
    this.generarPdf(data);

    this.conyugue.forEach(
      familiar  => {
        familiar.relacion = 'conyugue'
        this.familiares.push(familiar)
      }
    );

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
    
    
    this.fichaService.crearDeclaracion(data).subscribe(
      res => {}
    )

    this.router.navigate(['/'])
    
  }

  addFamiliar(event){

    let familiar = <Familiar>{
      nombresApellidos: this.familiarNombresApellidos,
      dni: this.familiarDni,
      ocupacion: this.familiarOcupacion
    }
    if(this.opcion === 0){
      this.conyugue.push(familiar)
    } else if( this.opcion === 1){
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

  removeFamiliar(familiar, opcion) {

    if (opcion === 0){
      this.conyugue.splice(familiar, 1)
    } else if (opcion === 1) {
      this.padresLista.splice(familiar, 1);
    } else if (opcion === 2) {
      this.hijosLista.splice(familiar, 1);
    } else if (opcion === 3) {
      this.suegrosLista.splice(familiar, 1);
    } else if (opcion === 4) {
      this.yernosLista.splice(familiar, 1);
    } else if (opcion === 5) {
      this.abuelosLista.splice(familiar, 1);
    } else if (opcion === 6) {
      this.hermanosLista.splice(familiar, 1);
    } else if (opcion === 7) {
      this.nietosLista.splice(familiar, 1);
    } else {
      this.cunadosLista.splice(familiar, 1);
    }

  }

  generarPdf(data){
    const pdfController = new PdfMakeWrapper();

    pdfController.pageSize('A4');

    pdfController.pageMargins([70, 50]);

    pdfController.info({
      title: data.nombresApellidos,
      author: 'multicoop',
      subject: 'declaracion jurada'
    })

    pdfController.add(
      new Txt('DECLARACION JURADA DE FAMILIARES').alignment('center').bold().fontSize(14).end
    );

    pdfController.add(
      pdfController.ln(2)
    )

    pdfController.add([
      {
        text: [
          'Yo, ',
          {
            text: data.nombresApellidos,
            bold: true,
            decoration: 'underline'
          },
          '  identificado con DNI Nº ',
          {
            text: data.dni,
            bold: true,
            decoration: 'underline'
          },
          ', con domicilio en ',
          {
            text: data.direccion,
            bold: true,
            decoration: 'underline'
          },
          ' distrito de ',
          {
            text: data.distrito,
            bold: true,
            decoration: 'underline'
          },
          ' departamento de ',
          {
            text: data.departamento,
            bold: true,
            decoration: 'underline'
          },
          ', declaro bajo juramento que todos los datos que coloco en el presente documento es verdad, en caso contrario me someto a las sanciones de acuerdo a la ley vigente.'
        ],
        fontSize: 11,
        alignment: 'justify'
      }
    ])

    pdfController.add(
      pdfController.ln(2)
    )

    pdfController.add(
      {
        style: 'tableExample',
        fontSize: 10,
        table: {
          widths: [235, 60, 135],
          body: this.getTable()
        }
      }
    );

    pdfController.add(
      pdfController.ln(2)
    )

    pdfController.add(
      new Txt(this.espacioFirma(data.nombresApellidos.length) + '\n' + data.nombresApellidos + '\n' + data.dni).alignment('center').fontSize(11).end
    )

    pdfController.create().open();
  }

  getTable() {

    var data = []
    
    data.push(
      [{ text: 'PRIMER GRADO', style: 'tableHeader', alignment: 'center', bold: true, colSpan: 3}, {}, {}]
    )

    data.push(
      [{ text: 'NOMBRES Y APELLIDOS DE CONYUGUE', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'DNI', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'ACTIVIDAD DE TRABAJO', style: 'tableHeader', alignment: 'center', bold: true}]
    )
    for(let i = 0; i < this.conyugue.length; ++i){
      let fam = <Familiar> this.conyugue[i]
      data.push(
        [{ text: (i + 1) + '.   ' + fam.nombresApellidos, alignment: 'left'}, { text: fam.dni, alignment: 'center'}, { text: fam.ocupacion, alignment: 'center'}]
      )
    }

    data.push(
      [{ text: 'NOMBRES Y APELLIDOS DE PADRE Y MADRE', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'DNI', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'ACTIVIDAD DE TRABAJO', style: 'tableHeader', alignment: 'center', bold: true}]
    )

    //pushing padres
    for(let i = 0; i < this.padresLista.length; ++i){
      let fam = <Familiar> this.padresLista[i]
      data.push(
        [{ text: (i + 1) + '.   ' + fam.nombresApellidos, alignment: 'left'}, { text: fam.dni, alignment: 'center'}, { text: fam.ocupacion, alignment: 'center'}]
      )
    }

    //pushing hijos
    data.push(
      [{ text: 'NOMBRES Y APELLIDOS HIJOS', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'DNI', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'ACTIVIDAD DE TRABAJO', style: 'tableHeader', alignment: 'center', bold: true}]
    )
    for(let i = 0; i < this.hijosLista.length; ++i){
      let fam = <Familiar> this.hijosLista[i]
      data.push(
        [{ text: (i + 1) + '.   ' + fam.nombresApellidos, alignment: 'left'}, { text: fam.dni, alignment: 'center'}, { text: fam.ocupacion, alignment: 'center'}]
      )
    }

    //push suegros
    data.push(
      [{ text: 'NOMBRES Y APELLIDOS SUEGROS', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'DNI', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'ACTIVIDAD DE TRABAJO', style: 'tableHeader', alignment: 'center', bold: true}]
    )
    for(let i = 0; i < this.suegrosLista.length; ++i){
      let fam = <Familiar> this.suegrosLista[i]
      data.push(
        [{ text: (i + 1) + '.   ' + fam.nombresApellidos, alignment: 'left'}, { text: fam.dni, alignment: 'center'}, { text: fam.ocupacion, alignment: 'center'}]
      )
    }

    //push yernos
    data.push(
      [{ text: 'NOMBRES Y APELLIDOS YERNO/NUERA', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'DNI', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'ACTIVIDAD DE TRABAJO', style: 'tableHeader', alignment: 'center', bold: true}]
    )
    for(let i = 0; i < this.yernosLista.length; ++i){
      let fam = <Familiar> this.yernosLista[i]
      data.push(
        [{ text: (i + 1) + '.   ' + fam.nombresApellidos, alignment: 'left'}, { text: fam.dni, alignment: 'center'}, { text: fam.ocupacion, alignment: 'center'}]
      )
    }
    
    //push segundo grado space
    data.push(
      [{ text: 'SEGUNDO GRADO', style: 'tableHeader', alignment: 'center', bold: true, colSpan: 3}, {}, {}]
    )

    //push abuelos
    data.push(
      [{ text: 'NOMBRES Y APELLIDOS DE ABUELOS', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'DNI', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'ACTIVIDAD DE TRABAJO', style: 'tableHeader', alignment: 'center', bold: true}]
    )
    for(let i = 0; i < this.abuelosLista.length; ++i){
      let fam = <Familiar> this.abuelosLista[i]
      data.push(
        [{ text: (i + 1) + '.   ' + fam.nombresApellidos, alignment: 'left'}, { text: fam.dni, alignment: 'center'}, { text: fam.ocupacion, alignment: 'center'}]
      )
    }

    //push hermano
    data.push(
      [{ text: 'NOMBRES Y APELLIDOS HERMANOS', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'DNI', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'ACTIVIDAD DE TRABAJO', style: 'tableHeader', alignment: 'center', bold: true}]
    )
    for(let i = 0; i < this.hermanosLista.length; ++i){
      let fam = <Familiar> this.hermanosLista[i]
      data.push(
        [{ text: (i + 1) + '.   ' + fam.nombresApellidos, alignment: 'left'}, { text: fam.dni, alignment: 'center'}, { text: fam.ocupacion, alignment: 'center'}]
      )
    }

    //push nietos
    data.push(
      [{ text: 'NOMBRES Y APELLIDOS NIETOS', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'DNI', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'ACTIVIDAD DE TRABAJO', style: 'tableHeader', alignment: 'center', bold: true}]      
    )
    for(let i = 0; i < this.nietosLista.length; ++i){
      let fam = <Familiar> this.nietosLista[i]
      data.push(
        [{ text: (i + 1) + '.   ' + fam.nombresApellidos, alignment: 'left'}, { text: fam.dni, alignment: 'center'}, { text: fam.ocupacion, alignment: 'center'}]
      )
    }

    //push cunados
    data.push(
      [{ text: 'NOMBRES Y APELLIDOS CUÑADOS', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'DNI', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'ACTIVIDAD DE TRABAJO', style: 'tableHeader', alignment: 'center', bold: true}]
    )
    for(let i = 0; i < this.cunadosLista.length; ++i){
      let fam = <Familiar> this.cunadosLista[i]
      data.push(
        [{ text: (i + 1) + '.   ' + fam.nombresApellidos, alignment: 'left'}, { text: fam.dni, alignment: 'center'}, { text: fam.ocupacion, alignment: 'center'}]
      )
    }

    return data;
  }

  espacioFirma(len){
    var espacio = ''
    
    for(let i = -1; i < len + 1; ++i){
      espacio = espacio + '_'
    }

    return espacio
  }

}
