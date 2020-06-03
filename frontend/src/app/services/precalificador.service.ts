import { Injectable } from '@angular/core';
import { PreCalificador } from '../other/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrecalificadorService {

  constructor(private http: HttpClient) { }

  addPrecalificador(precalificador: PreCalificador) {
    this.http.post("http://multicoop.com.pe:8000/api/precalificador", precalificador).subscribe({
      next: data => console.log(data)
    });
  }

}
