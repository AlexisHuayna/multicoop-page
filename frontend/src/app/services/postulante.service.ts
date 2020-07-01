import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostulanteService {

  constructor(private http: HttpClient) { }

  agregarPostulante(file: File, postulante){
    const endpoint = 'http://multicoop.com.pe:8000/api/postulante';
    const formData: FormData = new FormData();
    formData.append('fileKey', file, file.name);
    console.log(formData)
    console.log(postulante)

    //return this.http.post(endpoint, formData)
  }
}
