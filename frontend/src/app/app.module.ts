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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
