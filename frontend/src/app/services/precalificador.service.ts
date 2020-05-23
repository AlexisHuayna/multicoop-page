import { Injectable } from '@angular/core';
import { PreCalificador } from '../other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PrecalificadorService {

  constructor() { }

  precalificador: PreCalificador;
}
