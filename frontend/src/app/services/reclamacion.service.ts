import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reclamacion } from '../other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ReclamacionService {

  constructor(private http: HttpClient) { }

  addReclamacion(reclamacion: Reclamacion) {
    this.http.post("http://multicoop.com.pe:8000/api/reclamacion", reclamacion).subscribe({
      next: data => console.log(data)
    });
  }
}
