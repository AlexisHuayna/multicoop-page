import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursosHumanosRoutingModule } from './recursos-humanos-routing.module';
import { FichaSintomatologicaComponent } from './ficha-sintomatologica/ficha-sintomatologica.component';
import { ListaFichasComponent } from './lista-fichas/lista-fichas.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestingComponent } from './testing/testing.component';
import { RecursosHumanosComponent } from './recursos-humanos.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { DeclaracionComponent } from './declaracion/declaracion.component';
import { PdfComponent } from './pdf/pdf.component';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts";

PdfMakeWrapper.setFonts(pdfFonts);


@NgModule({
  declarations: [
    RecursosHumanosComponent,
    FichaSintomatologicaComponent,
    ListaFichasComponent,
    TestingComponent,
    EvaluacionComponent,
    DeclaracionComponent,
    PdfComponent
  ],
  imports: [
    CommonModule,
    RecursosHumanosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class RecursosHumanosModule { }
