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
import { HomeComponent } from './body/home/home.component';
import { PrecalificadorComponent } from './body/precalificador/precalificador.component';
import { ReclamacionesComponent } from './body/reclamaciones/reclamaciones.component';
import { BolsaTrabajoComponent } from './body/bolsa-trabajo/bolsa-trabajo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TarifarioGrupalComponent } from './body/transparencia/tarifario-grupal/tarifario-grupal.component';
import { TarifarioConsumoMypeComponent } from './body/transparencia/tarifario-consumo-mype/tarifario-consumo-mype.component';
import { ProcedimientoAtencionComponent } from './body/transparencia/procedimiento-atencion/procedimiento-atencion.component';
import { SorteoComponent } from './sorteo/sorteo.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
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
    path: 'ubicanos/redAgencias',
    component: RedAgenciasComponent,
    pathMatch: 'full'
  }, {
    path: 'ubicanos/telefonosContacto',
    component: TelefonosContactoComponent,
    pathMatch: 'full'
  }, {
    path: 'precalificador',
    component: PrecalificadorComponent,
    pathMatch: 'full'
  }, {
    path: 'reclamacion',
    component: ReclamacionesComponent,
    pathMatch: 'full'
  }, {
    path: 'bolsaTrabajo',
    component: BolsaTrabajoComponent,
    pathMatch: 'full'
  }, {
    path: 'transparencia/procedimientoActencion',
    component: ProcedimientoAtencionComponent,
    pathMatch: 'full'
  }, {
    path: 'transparencia/tarifarioGrupal',
    component: TarifarioGrupalComponent,
    pathMatch: 'full'
  }, {
    path: 'transparencia/tarifarioConsumoMype',
    component: TarifarioConsumoMypeComponent,
    pathMatch: 'full'
  }, {
    path:'sorteo',
    component: SorteoComponent,
    pathMatch: 'full',
  }, {
    path: 'interno',
    loadChildren: () => import('./interno/interno.module').then(m => m.InternoModule)
  }, {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
