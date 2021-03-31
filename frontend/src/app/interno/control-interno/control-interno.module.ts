import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ControlInternoRoutingModule } from './control-interno-routing.module';
import { DenunciasComponent } from './denuncias/denuncias.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [DenunciasComponent],
  imports: [
    CommonModule,
    ControlInternoRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule
  ]
})
export class ControlInternoModule { }
