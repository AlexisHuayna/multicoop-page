import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  AfterViewChecked,
} from "@angular/core";
import { Oportunidad } from "src/app/other/interfaces";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-oportunidad-detalles",
  templateUrl: "./oportunidad-detalles.component.html",
  styleUrls: ["./oportunidad-detalles.component.css"],
})
export class OportunidadDetallesComponent implements OnInit {
  
  @Input() oportunidad: Oportunidad;
  @Output() listaOportunidades = new EventEmitter<Boolean>();
  
  displayForm: Boolean = false;

  constructor() { 
  }

  ngOnInit(): void {}

  mostrarListaOportunidades() {
    this.displayForm = false;
    this.listaOportunidades.emit(true);
  }

  postulanteForm() {
    this.displayForm = true;
  }

}
