import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';

@Injectable({
  providedIn: 'root'
})
export class PostulanteService {

  constructor(private http: HttpClient) { }

  agregarPostulante(postulante){

    return this.http.post<String>('http://multicoop.com.pe:8000/api/postulantes', postulante);
  }
}
