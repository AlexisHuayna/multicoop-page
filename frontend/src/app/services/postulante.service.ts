import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostulanteService {

  constructor(private http: HttpClient) { }

  agregarPostulante(postulante){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'multipart/form-data',
      })
    };

    return this.http.post<String>('http://127.0.0.1:8000/api/postulantes', postulante, httpOptions);
  }
}
