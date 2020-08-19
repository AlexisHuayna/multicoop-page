import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursosHumanosComponent } from './recursos-humanos/recursos-humanos.component';
import { InternoRoutingModule } from './interno-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RecursosHumanosComponent],
  imports: [
    CommonModule,
    InternoRoutingModule,
    ReactiveFormsModule,
  ]
})
export class InternoModule { }
