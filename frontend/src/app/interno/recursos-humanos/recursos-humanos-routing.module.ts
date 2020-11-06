import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaFichasComponent } from './lista-fichas/lista-fichas.component';
import { FichaSintomatologicaComponent } from './ficha-sintomatologica/ficha-sintomatologica.component';
import { TestingComponent } from './testing/testing.component';
import { RecursosHumanosComponent } from './recursos-humanos.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';
import { DeclaracionComponent } from './declaracion/declaracion.component';
import { PdfComponent } from './pdf/pdf.component';


const routes: Routes = [
  {
    path: '',
    component: TestingComponent
  },
  {
    path: 'declaracionFamiliares',
    component: DeclaracionComponent
  },
  {
    path: 'ficha/:empleado/:ficha',
    component: FichaSintomatologicaComponent,
  },
  {
    path: 'reglamento/:empleado/:ficha',
    component: EvaluacionComponent
  },
  {
    path: 'pdf',
    component: PdfComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursosHumanosRoutingModule { }
