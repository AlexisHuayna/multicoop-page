import { Injectable } from '@angular/core';
import { PreCalificador } from '../other/interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrecalificadorService {

  constructor(private http: HttpClient) { }

  addPrecalificador(precalificador: PreCalificador){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };

    return this.http.post<String>("http://127.0.0.1:8000/api/precalificador", precalificador, httpOptions);
  }

}
