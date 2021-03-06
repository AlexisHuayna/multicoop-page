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

    return this.http.post<String>("https://www.multicoop.com.pe:8000/api/precalificador", precalificador, httpOptions);
  }

}
