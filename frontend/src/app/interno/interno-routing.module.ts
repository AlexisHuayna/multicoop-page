import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InternoComponent } from './interno.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '',
    component: InternoComponent,
    children: 
    [
      {
        path: 'rh',
        loadChildren: () => import('./recursos-humanos/recursos-humanos.module').then(m => m.RecursosHumanosModule)
      },
      {
        path: 'denuncias',
        loadChildren: () => import('./control-interno/control-interno.module').then(m => m.ControlInternoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternoRoutingModule { }