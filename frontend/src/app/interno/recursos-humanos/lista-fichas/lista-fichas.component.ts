import { Component, OnInit, Input } from '@angular/core';
import { FichaSintomasService } from 'src/app/services/ficha-sintomas.service';
import { FichaCabecera, PersonalFicha, Personal } from 'src/app/other/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-fichas',
  templateUrl: './lista-fichas.component.html',
  styleUrls: ['./lista-fichas.component.css']
})
export class ListaFichasComponent implements OnInit {

  @Input() idAgencia: string;
  @Input() tipoFicha: number;

  personalFaltante: PersonalFicha[];
  constructor(private fichaService: FichaSintomasService) {
    this.personalFaltante = [];

  }

  ngOnInit(): void {
    let fichaObservable: Observable<Personal[]>;

    if (this.tipoFicha == 0) {
      fichaObservable = this.fichaService.getFaltantesEntrada(this.idAgencia);
    } else {
      fichaObservable = this.fichaService.getFaltantesSalida(this.idAgencia);
    }

    fichaObservable.subscribe(
      personalFaltanteResponse => {
        this.personalFaltante = personalFaltanteResponse;
        console.log(this.personalFaltante[0].idFicha);
      }
    );
  }

}
