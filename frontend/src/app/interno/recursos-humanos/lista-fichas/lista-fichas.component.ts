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
  @Input() ruta: string;

  agencia: string;

  personalFaltante: PersonalFicha[];
  
  constructor(private fichaService: FichaSintomasService) {
    this.personalFaltante = [];

  }

  ngOnInit(): void {
    let fichaObservable: Observable<PersonalFicha[]>;

    if (this.tipoFicha == 0) {
      fichaObservable = this.fichaService.getFaltantesEntrada(this.idAgencia);
    } else if (this.tipoFicha == 3) {
      fichaObservable = this.fichaService.getSst(this.idAgencia);
    } else if (this.tipoFicha == 4) {
      fichaObservable = this.fichaService.getRit(this.idAgencia);
    } else {
      fichaObservable = this.fichaService.getFaltantesSalida(this.idAgencia);
    }

    fichaObservable.subscribe(
      personalFaltanteResponse => {
        this.personalFaltante = personalFaltanteResponse;
      }
    );

    this.parseAgencia(this.idAgencia);
  }

  parseAgencia(id) {
    if ( id == '01' ) {
      this.agencia = 'Arequipa';
    } else if ( id == '02' ) {
      this.agencia = 'Juliaca';
    } else if ( id == '03' ) {
      this.agencia = 'Puno';
    } else if ( id == '04' ) {
      this.agencia = 'Moquegua';
    } else if ( id == '05' ) {
      this.agencia = 'Ayaviri';
    } else if ( id == '06' ) {
      this.agencia = 'Tacna';
    } else if ( id == '07' ) {
      this.agencia = 'Cusco';
    }
  }


  displayContent(evt) {
    evt.target.classList.toggle('active');
    var content = document.getElementById(this.idAgencia + this.tipoFicha);
    if (content.style.display === "block"){
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  }


}
