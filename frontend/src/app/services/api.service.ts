import { Injectable } from '@angular/core';
import { PreCalificador } from '../other/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private _http: HttpClient
  ) { }

  api_url: string = 'http:localhost:8000';

  addPreCalificador(nombres: string,
    apellidos: string,
    dni: string,
    telefono: string,
    localidad: string,
    monto: number, ): Observable<PreCalificador> {
    return this._http.post<PreCalificador>(`${this.api_url}/precalificador`, {
      nombres: nombres,
      apellidos: apellidos,
      dni: dni,
      telefono: telefono,
      localidad: localidad,
      monto: monto,
    })
  }

}
