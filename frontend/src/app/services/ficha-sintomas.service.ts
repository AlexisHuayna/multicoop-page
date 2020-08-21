import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FichaSintomasService {

  constructor(private http: HttpClient) { }

  getServerTime() {
    return this.http.get("http://multicoop.com.pe:8000/api/time");
  }

  add(ficha){
    return this.http.post("http://multicoop.com.pe:8000/api/interno/rh/ficha", ficha);
  }

  getRemaining() {
    return this.http.get("http://multicoop.com.pe:8000/api/interno/rh/ficha/lista");
  }
}
