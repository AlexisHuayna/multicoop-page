import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoporteService {

  constructor(private http: HttpClient) { }

  operaciones(cli) {
    return this.http.post("https://www.multicoop.com.pe:8000/api/soporte/operaciones", cli);
  }
}
