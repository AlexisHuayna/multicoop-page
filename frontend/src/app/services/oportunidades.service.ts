import { Injectable } from '@angular/core';
import { Oportunidad } from '../other/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OportunidadesService {


  constructor(private http: HttpClient) { }

  getOpotunidades(){
    return this.http.get<Oportunidad[]>("http://multicoop.com.pe:8000/api/oportunidades");
  }
}
