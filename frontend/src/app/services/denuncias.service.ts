import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DenunciasService {

  constructor(private http: HttpClient) { }
  
  addDenuncia(denuncia){
    return this.http.post("https://www.multicoop.com.pe:8000/api/denuncias", denuncia);
  }

  getPersonal(){
    return this.http.get("https://www.multicoop.com.pe:8000/api/interno/personal");
  }
}
