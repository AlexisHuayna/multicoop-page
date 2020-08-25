import { Component, OnInit, Input } from '@angular/core';
import { FichaSintomasService } from 'src/app/services/ficha-sintomas.service';
import { FichaCabecera } from 'src/app/other/interfaces';

@Component({
  selector: 'app-lista-fichas',
  templateUrl: './lista-fichas.component.html',
  styleUrls: ['./lista-fichas.component.css']
})
export class ListaFichasComponent implements OnInit {

  @Input() idAgencia: string;
  fichas: FichaCabecera[] = [];

  constructor(private fichaService: FichaSintomasService) {
    this.fichaService.getRemaining().subscribe(
      fichasResponse => {
        
      }
    );
  }

  ngOnInit(): void {
  }

}
