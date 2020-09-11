import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerInformation, FichaCabecera, Personal, PersonalFicha, Ficha } from '../other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FichaSintomasService {
  
  constructor(private http: HttpClient) { }
  
  getServerTime() {
    return this.http.get<ServerInformation>("http://multicoop.com.pe:8000/api/time");
  }
  
  add(ficha){
    return this.http.post("http://multicoop.com.pe:8000/api/interno/rh/ficha", ficha);
  }
  
  getFaltantesEntrada(idAgencia) {
    return this.http.get<PersonalFicha[]>(`http://multicoop.com.pe:8000/api/interno/rh/fichas/faltantesEntrada/${idAgencia}`);
  }

  getFaltantesSalida(idAgencia) {
    return this.http.get<PersonalFicha[]>(`http://multicoop.com.pe:8000/api/interno/rh/fichas/faltantesSalida/${idAgencia}`);
  }

  getEmpleado(idEmpleado) {
    return this.http.get<Personal>(`http://multicoop.com.pe:8000/api/interno/rh/empleados/${idEmpleado}`);
  }

  getFicha(idFicha) {
    return this.http.get<Ficha>(`http://multicoop.com.pe:8000/api/interno/rh/fichas/${idFicha}`);
  }

  crearFicha(ficha) {
    return this.http.post("http://multicoop.com.pe:8000/api/interno/rh/fichaSintomatologica", ficha);
  }

  updateFicha(ficha) {
    return this.http.post("http://multicoop.com.pe:8000/api/interno/rh/fichaSintomatologica/u", ficha)
  }
}
