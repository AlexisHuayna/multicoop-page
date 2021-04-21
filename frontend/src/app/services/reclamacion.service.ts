import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reclamacion } from '../other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ReclamacionService {

  constructor(private http: HttpClient) { }

  addReclamacion(reclamacion: Reclamacion) {
    return this.http.post("https://www.multicoop.com.pe:8000/api/reclamacion", reclamacion)
  }
}
