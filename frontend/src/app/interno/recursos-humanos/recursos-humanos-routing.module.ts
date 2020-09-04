import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaFichasComponent } from './lista-fichas/lista-fichas.component';
import { FichaSintomatologicaComponent } from './ficha-sintomatologica/ficha-sintomatologica.component';
import { TestingComponent } from './testing/testing.component';
import { RecursosHumanosComponent } from './recursos-humanos.component';


const routes: Routes = [
  {
    path: '',
    component: RecursosHumanosComponent
  },
  {
    path: 'ficha/:empleado/:ficha',
    component: FichaSintomatologicaComponent,
  },
  {
    path: 'test',
    component: TestingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecursosHumanosRoutingModule { }
