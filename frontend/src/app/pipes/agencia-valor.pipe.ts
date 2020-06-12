import { Pipe, PipeTransform } from '@angular/core';
import { agencias } from '../other/agencias';

@Pipe({
  name: 'agenciaValor'
})
export class AgenciaValorPipe implements PipeTransform {

  transform(agenciaId: string): string {
    return agencias[agenciaId];
  }

}
