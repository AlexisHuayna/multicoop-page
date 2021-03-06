import { Injectable } from '@angular/core';
import { Oportunidad } from '../other/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OportunidadesService {


  constructor(private http: HttpClient) { }

  getOportunidades(){
    return this.http.get<Oportunidad[]>("https://www.multicoop.com.pe:8000/api/oportunidades")
  }
  
}
