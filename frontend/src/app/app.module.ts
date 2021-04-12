import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { CarouselComponent } from './body/carousel/carousel.component';
import { AboutUsComponent } from './footer/about-us/about-us.component';
import { SocialBarComponent } from './body/social-bar/social-bar.component';
import { MainContentComponent } from './body/main-content/main-content.component';
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
import { PersonasComponent } from './body/personas/personas.component';
import { PrecalificadorComponent } from './body/precalificador/precalificador.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ReclamacionesComponent } from './body/reclamaciones/reclamaciones.component';
import { BolsaTrabajoComponent } from './body/bolsa-trabajo/bolsa-trabajo.component';
import { OportunidadesComponent } from './body/bolsa-trabajo/oportunidades/oportunidades.component';
import { OportunidadDetallesComponent } from './body/bolsa-trabajo/oportunidad-detalles/oportunidad-detalles.component';
import { TasasPasivasComponent } from './body/transparencia/tasas-pasivas/tasas-pasivas.component';
import { PostulanteComponent } from './body/bolsa-trabajo/postulante/postulante.component';
import { AgenciaValorPipe } from './pipes/agencia-valor.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TarifarioConsumoMypeComponent } from './body/transparencia/tarifario-consumo-mype/tarifario-consumo-mype.component';
import { TarifarioGrupalComponent } from './body/transparencia/tarifario-grupal/tarifario-grupal.component';
import { ProcedimientoAtencionComponent } from './body/transparencia/procedimiento-atencion/procedimiento-atencion.component';
import { HelpersComponent } from './helpers/helpers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SorteoComponent, DialogLoader } from './sorteo/sorteo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckbox, MatCheckboxModule } from '@angular/material/checkbox';
import { GraciasComponent } from './gracias/gracias.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselComponent,
    AboutUsComponent,
    SocialBarComponent,
    MainContentComponent,
    PrestamoPersonalComponent,
    PrestamoConsumoComponent,
    PrestamoPagaDiarioComponent,
    PrestamoHipotecarioComponent,
    GrupalMultiMujerComponent,
    PrestamoMypeComponent,
    AgenteMultiServiciosComponent,
    ConveniosComponent,
    DatosEmpresaComponent,
    HistoriaComponent,
    MisionVisionComponent,
    RedAgenciasComponent,
    TelefonosContactoComponent,
    HomeComponent,
    PersonasComponent,
    PrecalificadorComponent,
    ReclamacionesComponent,
    BolsaTrabajoComponent,
    OportunidadesComponent,
    OportunidadDetallesComponent,
    TasasPasivasComponent,
    PostulanteComponent,
    AgenciaValorPipe,
    NotFoundComponent,
    TarifarioConsumoMypeComponent,
    TarifarioGrupalComponent,
    ProcedimientoAtencionComponent,
    HelpersComponent,
    SorteoComponent,
    DialogLoader,
    GraciasComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    PdfViewerModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  exports : [
    AgenciaValorPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
