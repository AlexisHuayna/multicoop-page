import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FichaSintomasService } from 'src/app/services/ficha-sintomas.service';

@Component({
  selector: 'app-ficha-sintomatologica',
  templateUrl: './ficha-sintomatologica.component.html',
  styleUrls: ['./ficha-sintomatologica.component.css']
})
export class FichaSintomatologicaComponent implements OnInit {

  propsHelper = {mensaje : 'Ficha llenada', titulo : null, ruta: '/'};
  sintomatologiaForm: FormGroup;
  medicacionFlag = false;
  enfermedadFlag = false;
  enContacto = false;
  otrosContacto = false;
  fecha: any;


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
      textCuarta: ['', ],
      otrosCuarta: ['', ],
      quinta: ['', Validators.compose([Validators.required])],
      textQuinta: [''],
      sexta: ['', Validators.compose([Validators.required])],
      textSexta: [''],
      septima: ['', Validators.compose([Validators.required])],
      octava: ['']
    });

    try {
      fichaService.getServerTime().subscribe(
        timeResponse => {
          this.fecha = timeResponse.time;
        }
      );
    } catch (error) {
      this.fecha = Date.now();
    }

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
    alert('Ficha llenada');
    if (values.cuarta == 'No') {
      values['otrosCuarta'] = 'No';
    } else if (values.textCuarta != 'Otros') {
      values['otrosCuarta'] = values.textCuarta;
    }

    if (values.quinta == 'No') {
      values['textQuinta'] = 'No';
    }

    if (values.sexta == 'No') {
      values['textSexta'] = 'No';
    }

    this.router.navigate(['/']);
    this.fichaService.add(values).subscribe(
      status => {
      }
    );
    //this.mensajeExito.show();
  }

  contacto(value) {
    this.enContacto = value;
  }

  contactoDetalle(value) {
    this.otrosContacto = value;
  }

}
