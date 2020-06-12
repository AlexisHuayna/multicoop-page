import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked} from '@angular/core';
import { Oportunidad } from 'src/app/other/interfaces';

@Component({
  selector: 'app-oportunidad-detalles',
  templateUrl: './oportunidad-detalles.component.html',
  styleUrls: ['./oportunidad-detalles.component.css']
})
export class OportunidadDetallesComponent implements OnInit, AfterViewChecked{

  @Input() oportunidad: Oportunidad
  @Output() listaOportunidades = new EventEmitter <Boolean>();
  
 modal : HTMLElement;

  constructor() { 
    
  }

  ngAfterViewChecked(): void {

    if(this.oportunidad){
      this.modal = document.getElementById('modalPostulante');
      window.onclick = (event) => {
        if(event.target == this.modal) {
          this.modal.style.display = "none";
        }
      }
    }
    
  }

  ngOnInit(): void {
  }
  
  mostrarListaOportunidades(){
    this.listaOportunidades.emit(true);
  }

  postulanteForm(){
    this.modal.style.display = "block";
  }

  closeForm(){
    this.modal.style.display = "none";
  }
}
