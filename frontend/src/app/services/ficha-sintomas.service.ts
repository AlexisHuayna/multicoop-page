import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerInformation, FichaCabecera } from '../other/interfaces';

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
  
  updateTemperatura(idRespuesta: number, values: any) {
    return this.http.put(`http://multicoop.com.pe:8000/api/interno/rh/ficha/respuesta/${idRespuesta}`, values);
  }

  getRemaining() {
    return this.http.get("http://multicoop.com.pe:8000/api/interno/rh/ficha/lista");
  }

  getLastFicha(idColaborador) {
    return this.http.get<FichaCabecera>(`htttp://multicoop.com.pe:8000/api/interno/rh/ficha/${idColaborador}`);
  }

  getFicha(idColaborador, fecha) {
    return this.http.get<FichaCabecera>(`htttp://multicoop.com.pe:8000/api/interno/rh/ficha/${idColaborador}/${fecha}`);
  }
}
