import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrestamoPersonalComponent } from './body/personas/prestamo-personal/prestamo-personal.component';
import { PrestamoConsumoComponent } from './body/personas/prestamo-consumo/prestamo-consumo.component';
import { PrestamoPagaDiarioComponent } from './body/personas/prestamo-paga-diario/prestamo-paga-diario.component';
import { PrestamoHipotecarioComponent } from './body/empresas/prestamo-hipotecario/prestamo-hipotecario.component';
import { GrupalMultiMujerComponent } from './body/empresas/grupal-multi-mujer/grupal-multi-mujer.component';
import { PrestamoMypeComponent } from './body/empresas/prestamo-mype/prestamo-mype.component';
import { AgenteMultiServiciosComponent } from './body/serviciosMultiples/agente-multi-servicios/agente-multi-servicios.component';
import { ConveniosComponent } from './body/serviciosMultiples/convenios/convenios.component';
import { DatosEmpresaComponent } from './body/conocenos/datos-empresa/datos-empresa.component';
import { HistoriaComponent } from './body/conocenos/historia/historia.component';
import { MisionVisionComponent } from './body/conocenos/mision-vision/mision-vision.component';
import { RedAgenciasComponent } from './body/ubicanos/red-agencias/red-agencias.component';
import { TelefonosContactoComponent } from './body/ubicanos/telefonos-contacto/telefonos-contacto.component';
import { TransparenciaComponent } from './body/conocenos/transparencia/transparencia.component';
import { HomeComponent } from './body/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'personas/prestamoPersonal',
    component: PrestamoPersonalComponent,
    pathMatch: 'full'
  }, {
    path: 'personas/prestamoConsumo',
    component: PrestamoConsumoComponent,
    pathMatch: 'full'
  }, {
    path: 'personas/prestamoPagaDiario',
    component: PrestamoPagaDiarioComponent,
    pathMatch: 'full'
  }, {
    path: 'empresas/prestamoHipotecario',
    component: PrestamoHipotecarioComponent,
    pathMatch: 'full'
  }, {
    path: 'empresas/grupalMultiMujer',
    component: GrupalMultiMujerComponent,
    pathMatch: 'full'
  }, {
    path: 'empresas/prestamoMype',
    component: PrestamoMypeComponent,
    pathMatch: 'full'
  }, {
    path: 'serviciosMultiples/agenteMultiservicios',
    component: AgenteMultiServiciosComponent,
    pathMatch: 'full'
  }, {
    path: 'serviciosMultiples/convenios',
    component: ConveniosComponent,
    pathMatch: 'full'
  }, {
    path: 'conocenos/datosEmpresa',
    component: DatosEmpresaComponent,
    pathMatch: 'full'
  }, {
    path: 'conocenos/historia',
    component: HistoriaComponent,
    pathMatch: 'full'
  }, {
    path: 'conocenos/misionVision',
    component: MisionVisionComponent,
    pathMatch: 'full'
  }, {
    path: 'conocenos/transparencia',
    component: TransparenciaComponent,
    pathMatch: 'full'
  }, {
    path: 'ubicanos/redAgencias',
    component: RedAgenciasComponent,
    pathMatch: 'full'
  }, {
    path: 'ubicanos/telefonosContacto',
    component: TelefonosContactoComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
