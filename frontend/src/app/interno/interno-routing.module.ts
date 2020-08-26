import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternoComponent } from './interno.component';
import { RecursosHumanosComponent } from './recursos-humanos/recursos-humanos.component';

const routes: Routes = [
  {
    path: 'rh',
    component: RecursosHumanosComponent,
  }
  /*
    {
      path: '',
      component: InternoComponent,
      children: [
        {
        path: 'rh',
        loadChildren: () => import('./recursos-humanos/recursos-humanos.module').then(m => m.RecursosHumanosModule)
        }
      ]
    }*/
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class InternoRoutingModule { }