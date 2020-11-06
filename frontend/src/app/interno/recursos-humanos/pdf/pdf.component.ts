import { Component, OnInit } from '@angular/core';
import { PdfMakeWrapper, Txt} from 'pdfmake-wrapper';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {


  public nombresApellidos
  public dni
  public departamento
  public provincia
  public distrito 
  public direccion 

  public padresLista = []
  public hijosLista = []
  public suegrosLista = []
  public yernosLista = []
  public abuelosLista = []
  public hermanosLista = []
  public nietosLista = []
  public cunadosLista = []

  constructor() {
    this.nombresApellidos = 'Alexis Fernando Huayna Pillco'
    this.dni = '72759038'
    this.departamento = 'Arequipa'
    this.provincia = 'Arequipa'
    this.distrito = 'Mariano Melgar'

    this.direccion = 'Prolongacion Av Lima 1713 Atalaya'
  }

  ngOnInit(): void {
  }

  generarPdf() {
    const pdfController = new PdfMakeWrapper();

    pdfController.pageSize('A4');

    pdfController.pageMargins([70, 50]);

    pdfController.info({
      title: this.nombresApellidos,
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
            text: this.nombresApellidos,
            bold: true,
            decoration: 'underline'
          },
          '  identificado con DNI Nº ',
          {
            text: this.dni,
            bold: true,
            decoration: 'underline'
          },
          ', con domicilio en ',
          {
            text: this.direccion,
            bold: true,
            decoration: 'underline'
          },
          ' distrito de ',
          {
            text: this.distrito,
            bold: true,
            decoration: 'underline'
          },
          ' departamento de ',
          {
            text: this.departamento,
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
          body: [
            [{ text: 'PRIMER GRADO', style: 'tableHeader', alignment: 'center', bold: true, colSpan: 3}, {}, {}],
            [{ text: 'NOMBRES Y APELLIDOS DE PADRE Y MADRE', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'DNI', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'ACTIVIDAD DE TRABAJO', style: 'tableHeader', alignment: 'center', bold: true}],
            [{ text: '1.   Alexis Fernando Huayna Pillco', alignment: 'left'}, {text: '72759038', alignment:'center'}, {text: 'Doctor', alignment: 'center'}],
            [{ text: 'NOMBRES Y APELLIDOS HIJOS', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'DNI', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'ACTIVIDAD DE TRABAJO', style: 'tableHeader', alignment: 'center', bold: true}],
            [{ text: 'NOMBRES Y APELLIDOS SUEGROS', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'DNI', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'ACTIVIDAD DE TRABAJO', style: 'tableHeader', alignment: 'center', bold: true}],
            [{ text: 'NOMBRES Y APELLIDOS YERNO/NUERA', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'DNI', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'ACTIVIDAD DE TRABAJO', style: 'tableHeader', alignment: 'center', bold: true}],
            [{ text: 'SEGUNDO GRADO', style: 'tableHeader', alignment: 'center', bold: true, colSpan: 3}, {}, {}],
            [{ text: 'NOMBRES Y APELLIDOS DE ABUELOS', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'DNI', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'ACTIVIDAD DE TRABAJO', style: 'tableHeader', alignment: 'center', bold: true}],
            [{ text: 'NOMBRES Y APELLIDOS HERMANOS', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'DNI', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'ACTIVIDAD DE TRABAJO', style: 'tableHeader', alignment: 'center', bold: true}],
            [{ text: 'NOMBRES Y APELLIDOS NIETOS', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'DNI', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'ACTIVIDAD DE TRABAJO', style: 'tableHeader', alignment: 'center', bold: true}],
            [{ text: 'NOMBRES Y APELLIDOS CUÑADOS', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'DNI', style: 'tableHeader', alignment: 'center', bold: true}, {text: 'ACTIVIDAD DE TRABAJO', style: 'tableHeader', alignment: 'center', bold: true}],
          ]
        }
      }
    );

    pdfController.add(
      pdfController.ln(2)
    )

    pdfController.add(
      new Txt(this.espacioFirma(this.nombresApellidos.length) + '\n' + this.nombresApellidos + '\n' + this.dni).alignment('center').fontSize(11).end
    )

    pdfController.create().open();
  }

  some(familiares) {
    let data = []
    
    for(let i = 0; i < familiares.length; ++i) {
      data.push(
        [{ text: familiares[i].nombresApellidos}]
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
