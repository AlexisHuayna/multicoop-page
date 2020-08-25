import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FichaSintomasService } from 'src/app/services/ficha-sintomas.service';
import { FichaCabecera,  Colaborador, Respuesta } from 'src/app/other/interfaces';

@Component({
  selector: 'app-ficha-sintomatologica',
  templateUrl: './ficha-sintomatologica.component.html',
  styleUrls: ['./ficha-sintomatologica.component.css']
})
export class FichaSintomatologicaComponent implements OnInit {

  sintomatologiaForm: FormGroup;
  medicacionFlag = false;
  enfermedadFlag = false;
  enContacto = false;
  otrosContacto = false;
  fecha: any;
  idColaborador: string;
  ficha: FichaCabecera;

  constructor(private builder: FormBuilder,
              private router: Router,
              private fichaService: FichaSintomasService,
              private route: ActivatedRoute) {
                
    try {
      fichaService.getServerTime().subscribe(
        timeResponse => {
          this.fecha = timeResponse.time;
        }
      );
    } catch (error) {
      this.fecha = Date.now();
    }

    if (this.route.snapshot.paramMap.has('idColaborador')) {
      this.getFicha(this.route.snapshot.paramMap.get('idColaborador'));
    } else {
      this.sintomatologiaForm = this.createForm(true);
    }
    
  }

  ngOnInit(): void {
    this.deleteAllDOM();
  }

  deleteAllDOM() {
    document.getElementById('shared').remove();
  }

  enfermedad(value) {
    this.enfermedadFlag = value;
  }

  medicacion(value){
    this.medicacionFlag = value;
  }

  contacto(value) {
    this.enContacto = value;
  }

  contactoDetalle(value) {
    this.otrosContacto = value;
  }

  getFicha(idColaborador) {
    this.fichaService.getLastFicha(idColaborador).subscribe(
      fichaResponse => {
        this.ficha = fichaResponse;
        this.sintomatologiaForm = this.createForm(false);
      }
    );
  }

  createForm(empty): FormGroup {
    let form: FormGroup;

    if (empty) {
      form = this.builder.group({
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
    } else {
      let colaborador: Colaborador;
      let respuestas: Respuesta[];
      
      this.ficha.data.forEach(fichaDetail => {
        if(!colaborador) {
          colaborador = fichaDetail.colaborador;
        }
        
        if(!respuestas) {
          respuestas = [];
          respuestas.push(fichaDetail.respuesta);
        } else {
          respuestas.push(fichaDetail.respuesta);
        }

      });

      let data = this.parsingRespuestas(respuestas);

      form = this.builder.group({
        apellidosNombres: [colaborador.nombresApellidos, Validators.compose([Validators.required])],
        area: [colaborador.area, Validators.compose([Validators.required])],
        dni: [colaborador.dni, Validators.compose([Validators.required])],
        direccion: [colaborador.direccion, Validators.compose([Validators.required])],
        celular: [colaborador.celular, Validators.compose([Validators.required])],
        primera: [data.primera, Validators.compose([Validators.required])],
        segunda: [data.segunda, Validators.compose([Validators.required])],
        tercera: [data.tercera, Validators.compose([Validators.required])],
        cuarta: [data.cuarta, Validators.compose([Validators.required])],
        textCuarta: [data.textCuarta, ],
        otrosCuarta: [data.otrosCuarta, ],
        quinta: [data.quinta, Validators.compose([Validators.required])],
        textQuinta: [data.textQuinta],
        sexta: [data.sexta, Validators.compose([Validators.required])],
        textSexta: [data.textSexta],
        septima: [data.septima, Validators.compose([Validators.required])],
        octava: [data.otrosCuarta]
      });
    }
    return form;
  }

  parsingRespuestas(respuestas: Respuesta[]) {
    let primera, segunda, tercera, cuarta, textCuarta, otrosCuarta,
        quinta, textQuinta, sexta, textSexta, septima, octava;

    primera = respuestas[0].detalle;
    segunda = respuestas[1].detalle;
    tercera = respuestas[2].detalle;

    if (respuestas[3].detalle == 'No') {
      cuarta = 'No'
      textCuarta = ''
      otrosCuarta = ''
    } else {
      cuarta = 'Si'
      if(respuestas[3].detalle != 'Otros') {
        textCuarta = respuestas[3].detalle
        otrosCuarta = ''
      } else {
        textCuarta = 'Otros'
        otrosCuarta = respuestas[3].detalle
      }
    }

    if(respuestas[4].detalle == 'No') {
      quinta = 'No';
      textQuinta = '';
    } else {
      quinta = 'Si';
      textQuinta = respuestas[4].detalle;
    }

    if(respuestas[5].detalle == 'No') {
      sexta = 'No';
      textSexta = '';
    } else {
      sexta = 'Si';
      textSexta = respuestas[5].detalle;
    }

    septima = respuestas[6].detalle;
    octava = respuestas[7].detalle;

    return {
      primera: primera,
      segunda: segunda,
      tercera: tercera,
      cuarta: cuarta,
      textCuarta: textCuarta,
      otrosCuarta: otrosCuarta,
      quinta: quinta,
      textQuinta: textQuinta,
      sexta: sexta,
      textSexta: textSexta,
      septima: septima,
      octava: octava
    };
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

    if(this.ficha) {
      const idPregunta = this.ficha.data[this.ficha.data.length - 1].respuesta.id;
      
      this.fichaService.updateTemperatura(idPregunta, values.octava);
    } else {
      this.fichaService.add(values).subscribe(
        status => {
  
        }
      );
    }

  }

}
