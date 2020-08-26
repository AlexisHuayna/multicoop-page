import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursosHumanosComponent } from './recursos-humanos/recursos-humanos.component';
import { InternoRoutingModule } from './interno-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InternoComponent } from './interno.component';

@NgModule({
  declarations: [RecursosHumanosComponent, InternoComponent],
  imports: [
    CommonModule,
    InternoRoutingModule,
    ReactiveFormsModule,
  ]
})
export class InternoModule { }
