import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reclamacion } from '../other/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ReclamacionService {

  constructor(private http: HttpClient) { }

  addReclamacion(reclamacion: Reclamacion) {
    this.http.post("http://127.0.0.1:8000/api/reclamacion", reclamacion).subscribe({
      next: data => console.log(data)
    });
  }
}
