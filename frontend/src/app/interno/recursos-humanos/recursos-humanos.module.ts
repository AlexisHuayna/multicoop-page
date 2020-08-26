import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecursosHumanosRoutingModule } from './recursos-humanos-routing.module';
import { FichaSintomatologicaComponent } from './ficha-sintomatologica/ficha-sintomatologica.component';
import { ListaFichasComponent } from './lista-fichas/lista-fichas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../../app.module';
import { TestingComponent } from './testing/testing.component';


@NgModule({
  declarations: [FichaSintomatologicaComponent, ListaFichasComponent, TestingComponent],
  imports: [
    CommonModule,
    RecursosHumanosRoutingModule,
    ReactiveFormsModule,
    AppModule
  ]
})
export class RecursosHumanosModule { }
