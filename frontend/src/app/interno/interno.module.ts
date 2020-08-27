import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternoRoutingModule } from './interno-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InternoComponent } from './interno.component';

@NgModule({
  declarations: [InternoComponent],
  imports: [
    CommonModule,
    InternoRoutingModule,
  ]
})
export class InternoModule { }
