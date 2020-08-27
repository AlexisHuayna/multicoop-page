import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursosHumanosRoutingModule } from './recursos-humanos-routing.module';
import { FichaSintomatologicaComponent } from './ficha-sintomatologica/ficha-sintomatologica.component';
import { ListaFichasComponent } from './lista-fichas/lista-fichas.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TestingComponent } from './testing/testing.component';
import { RecursosHumanosComponent } from './recursos-humanos.component';


@NgModule({
  declarations: [
    RecursosHumanosComponent,
    FichaSintomatologicaComponent,
    ListaFichasComponent,
    TestingComponent
  ],
  imports: [
    CommonModule,
    RecursosHumanosRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class RecursosHumanosModule { }
