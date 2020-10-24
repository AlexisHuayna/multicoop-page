import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaFichasComponent } from './lista-fichas/lista-fichas.component';
import { FichaSintomatologicaComponent } from './ficha-sintomatologica/ficha-sintomatologica.component';
import { TestingComponent } from './testing/testing.component';
import { RecursosHumanosComponent } from './recursos-humanos.component';
import { EvaluacionComponent } from './evaluacion/evaluacion.component';


const routes: Routes = [
  {
    path: '',
    component: TestingComponent
  },
  {
    path: 'test',
    component: RecursosHumanosComponent
  },
  {
    path: 'ficha/:empleado/:ficha',
    component: FichaSintomatologicaComponent,
  },
  {
    path: 'evaluacion',
    component: EvaluacionComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursosHumanosRoutingModule { }
