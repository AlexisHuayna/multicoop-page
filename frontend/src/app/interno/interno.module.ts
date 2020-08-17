import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursosHumanosComponent } from './recursos-humanos/recursos-humanos.component';
import { InternoRoutingModule } from './interno-routing.module';


@NgModule({
  declarations: [RecursosHumanosComponent],
  imports: [
    CommonModule,
    InternoRoutingModule
  ]
})
export class InternoModule { }
