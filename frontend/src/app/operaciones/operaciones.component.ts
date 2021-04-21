import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SoporteService } from '../services/soporte.service';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {

  soporteOperacionesForm: FormGroup


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private soporteService: SoporteService,
  ) {
    this.deleteAllDOM();
    this.soporteOperacionesForm = this.formBuilder.group({
      agencia: ['', Validators.compose([Validators.required])],
      ventanilla: ['', Validators.compose([Validators.required])],
      numeroOperacion: ['', Validators.compose([Validators.required])],
      operacion: ['', Validators.compose([Validators.required])],
      detalle: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
  }

  deleteAllDOM() {
    if(document.getElementById('shared')){
      document.getElementById('shared').style.display = 'none'
    }
  }

  enviar(values){
    this.soporteService.operaciones(values).subscribe(
      res => {
        this.router.navigate(['/']);
      }, err => {

      }
    );
  }
}
