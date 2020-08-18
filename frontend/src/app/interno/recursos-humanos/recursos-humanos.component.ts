import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FichaSintomasService } from 'src/app/services/ficha-sintomas.service';


@Component({
  selector: 'app-recursos-humanos',
  templateUrl: './recursos-humanos.component.html',
  styleUrls: ['./recursos-humanos.component.css']
})
export class RecursosHumanosComponent implements OnInit {

  sintomatologiaForm: FormGroup;
  medicacionFlag = false;
  enfermedadFlag = false;
  fecha:any = '2020-01-10';

  constructor(private builder: FormBuilder, private router: Router, private fichaService: FichaSintomasService) {
    this.sintomatologiaForm = this.builder.group({
      apellidosNombres: ['', Validators.compose([Validators.required])],
      area: ['', Validators.compose([Validators.required])],
      dni: ['', Validators.compose([Validators.required])],
      direccion: ['', Validators.compose([Validators.required])],
      celular: ['', Validators.compose([Validators.required])],
      primera: ['', Validators.compose([Validators.required])],
      segunda: ['', Validators.compose([Validators.required])],
      tercera: ['', Validators.compose([Validators.required])],
      cuarta: ['', Validators.compose([Validators.required])],
      quinta: ['', Validators.compose([Validators.required])],
      textQuinta: [],
      sexta: ['', Validators.compose([Validators.required])],
      textSexta: []
    });

    fichaService.getServerTime().subscribe(
      time => {
        this.fecha = time;
      }
    );

    this.fecha = Date.now();
  }

  ngOnInit(): void {
    this.deleteAll();
  }

  deleteAll() {
    document.getElementById('shared').remove();
  }

  enfermedad(value) {
    this.enfermedadFlag = value;
  }

  medicacion(value){
    this.medicacionFlag = value;
  }

  enviar(values) {
    console.log('Enviando', values);
    this.fichaService.add(values).subscribe(
      status => {
        this.router.navigate(['/']);
      }
    );
  }
}
