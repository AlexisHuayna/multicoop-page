import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SorteoService {

  constructor(private http: HttpClient) { }

  addParticipante(cli) {
    return this.http.post("http://multicoop.com.pe:8000/api/sorteo", cli);
  }
}
