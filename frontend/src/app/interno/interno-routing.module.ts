import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecursosHumanosComponent } from './recursos-humanos/recursos-humanos.component';

const routes: Routes = [
    {
      path: 'rh',
      component: RecursosHumanosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class InternoRoutingModule { }