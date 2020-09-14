import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FichaSintomasService } from 'src/app/services/ficha-sintomas.service';
import { FichaCabecera,  Colaborador, Respuesta, PersonalFicha, ServerInformation, Personal, Ficha } from 'src/app/other/interfaces';

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
  serverTime: ServerInformation;
  
  ficha: Ficha;
  empleado: Personal;

  constructor(private builder: FormBuilder,
              private router: Router,
              private fichaService: FichaSintomasService,
              private route: ActivatedRoute) {

    //creating empty form
    this.sintomatologiaForm = this.builder.group({
      idPersonal: [],
      apellidosNombres: [''],
      area: [''],
      dni: [''],
      direccion: [''],
      celular: [''],
      idFicha: [],
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
      septima: [],
      idPregunta: [],
      octava: []
    });
                
    try {
      fichaService.getServerTime().subscribe(
        timeResponse => {
          this.fecha = timeResponse.time;
          this.serverTime = timeResponse;
        }
      );
    } catch (error) {
      this.fecha = Date.now();
    }

    if (this.route.snapshot.paramMap.has('empleado')) {
      let id_empleado = this.route.snapshot.paramMap.get('empleado');
      let id_ficha = this.route.snapshot.paramMap.get('ficha');
      
      fichaService.getEmpleado(id_empleado).subscribe(
        empleadoResponse => {
          this.empleado = empleadoResponse[0];

          this.llenarEmpleado();

          if(id_ficha != '-1') {
            this.getFicha(id_ficha);
            this.sintomatologiaForm.get('octava').setValidators([Validators.required]);
            this.sintomatologiaForm.get('octava').updateValueAndValidity();
            this.sintomatologiaForm.patchValue({
              octava: '36.5'
            });

          } else {
            this.sintomatologiaForm.get('septima').setValidators([Validators.required]);
            this.sintomatologiaForm.get('septima').updateValueAndValidity();
            this.sintomatologiaForm.controls['octava'].disable();
            this.sintomatologiaForm.patchValue({
              septima: '36.5'
            });

          }

        }
      );

    }
    
  }

  ngOnInit(): void {
    this.deleteAllDOM();
    this.sintomatologiaForm.get('cuarta').valueChanges.subscribe(
      value => {
        if (value == 'Si') {
          this.enContacto = true;
          this.sintomatologiaForm.get('textCuarta').setValidators(Validators.required);
          this.sintomatologiaForm.get('textCuarta').updateValueAndValidity();

          this.sintomatologiaForm.get('textCuarta').valueChanges.subscribe(
            value2 => {
              if (value2 == 'Otros') {
                this.otrosContacto = true;
                this.sintomatologiaForm.get('otrosCuarta').setValidators(Validators.required);
                this.sintomatologiaForm.get('otrosCuarta').updateValueAndValidity();
              } else {
                this.otrosContacto = false;
                this.sintomatologiaForm.get('otrosCuarta').clearValidators();
                this.sintomatologiaForm.get('otrosCuarta').updateValueAndValidity();
              }
            }
          );

        } else {
          this.enContacto = false;
          this.sintomatologiaForm.get('textCuarta').clearValidators();
          this.sintomatologiaForm.get('textCuarta').updateValueAndValidity();

          this.otrosContacto = false;
          this.sintomatologiaForm.get('otrosCuarta').clearValidators();
          this.sintomatologiaForm.get('otrosCuarta').updateValueAndValidity();
        }
      }
    )

    this.sintomatologiaForm.get('quinta').valueChanges.subscribe(
      value => {
        if (value == 'Si') {
          this.medicacionFlag = true;
          this.sintomatologiaForm.get('textQuinta').setValidators(Validators.required);
          this.sintomatologiaForm.get('textQuinta').updateValueAndValidity();
        } else {
          this.sintomatologiaForm.get('textQuinta').clearValidators();
          this.sintomatologiaForm.get('textQuinta').updateValueAndValidity();
          this.medicacionFlag = false;
        }
      }
    )

    this.sintomatologiaForm.get('sexta').valueChanges.subscribe(
      value => {
        if (value == 'Si') {
          this.enfermedadFlag = true;
          this.sintomatologiaForm.get('textSexta').setValidators(Validators.required)
          this.sintomatologiaForm.get('textSexta').updateValueAndValidity();
        } else {
          this.sintomatologiaForm.get('textSexta').clearAsyncValidators();
          this.sintomatologiaForm.get('textSexta').updateValueAndValidity();
          this.enfermedadFlag = false;
        }
      }
    )
  }


  getFicha(id_ficha) {
    this.fichaService.getFicha(id_ficha).subscribe(
      fichaResponse=> {
        this.ficha = fichaResponse;
        this.llenarFicha();
      }
    )
  }

  llenarFicha(){
    console.log(this.ficha.respuestas)
    let respuestas_parsed = this.parsingRespuestas(this.ficha.respuestas);
    console.log(respuestas_parsed);
    this.sintomatologiaForm.patchValue({
      idFicha: this.ficha.ficha.id,
      primera: respuestas_parsed.primera,
      segunda: respuestas_parsed.segunda,
      tercera: respuestas_parsed.tercera,
      cuarta: respuestas_parsed.cuarta,
      textCuarta: respuestas_parsed.textCuarta,
      otrosCuarta: respuestas_parsed.otrosCuarta,
      quinta: respuestas_parsed.quinta,
      textQuinta: respuestas_parsed.textQuinta,
      sexta: respuestas_parsed.sexta,
      textSexta: respuestas_parsed.textSexta,
      septima: respuestas_parsed.septima,
      idPregunta: respuestas_parsed.octava
    });

    this.sintomatologiaForm.get('primera').disable();
    this.sintomatologiaForm.get('segunda').disable();
    this.sintomatologiaForm.get('tercera').disable();
    this.sintomatologiaForm.get('cuarta').disable();
    this.sintomatologiaForm.get('textCuarta').disable();
    this.sintomatologiaForm.get('otrosCuarta').disable();
    this.sintomatologiaForm.get('quinta').disable();
    this.sintomatologiaForm.get('textQuinta').disable();
    this.sintomatologiaForm.get('sexta').disable();
    this.sintomatologiaForm.get('textSexta').disable();
    this.sintomatologiaForm.get('septima').disable();

  }

  llenarEmpleado() {
    let full_name = this.empleado.apellidoPaterno + ' ' + this.empleado.apellidoMaterno + ' ' + this.empleado.nombres;
    this.sintomatologiaForm.patchValue({
      apellidosNombres: this.toCapital(full_name),
      area: this.toCapital(this.empleado.area),
      dni: this.empleado.dni,
      direccion: this.empleado.direccion.toUpperCase(),
      celular: this.empleado.celular,
      idPersonal: this.empleado.id
    })

    this.sintomatologiaForm.controls['apellidosNombres'].disable();
    this.sintomatologiaForm.controls['area'].disable();
    this.sintomatologiaForm.controls['dni'].disable();
    this.sintomatologiaForm.controls['direccion'].disable();
    this.sintomatologiaForm.controls['celular'].disable();

  }

  parsingRespuestas(respuestas: Respuesta[]) {
    let primera, segunda, tercera, cuarta, textCuarta, otrosCuarta,
        quinta, textQuinta, sexta, textSexta, septima, octava;

    respuestas.forEach(respuesta => {
      if(respuesta.nombrePregunta == 'primera') {
        primera = respuesta.respuestaPregunta;
      } else if (respuesta.nombrePregunta == 'segunda') {
        segunda = respuesta.respuestaPregunta;
      } else if (respuesta.nombrePregunta == 'tercera') {
        tercera = respuesta.respuestaPregunta;
      } else if (respuesta.nombrePregunta == 'cuarta') {
        if (respuesta.respuestaPregunta == 'No') {
          cuarta = 'No'
          textCuarta = ''
          otrosCuarta = ''
        } else {
          cuarta = 'Si'
          if(respuesta.respuestaPregunta == 'Familiar' || respuesta.respuestaPregunta == 'Centro de trabajo') {
            textCuarta = respuesta.respuestaPregunta
            otrosCuarta = ''
          } else {
            textCuarta = 'Otros'
            otrosCuarta = respuesta.respuestaPregunta
          }
        }
      } else if (respuesta.nombrePregunta == 'quinta') {
        if(respuesta.respuestaPregunta == 'No') {
          quinta = 'No';
          textQuinta = '';
        } else {
          quinta = 'Si';
          textQuinta = respuesta.respuestaPregunta;
        }
      } else if (respuesta.nombrePregunta == 'sexta') {
        if(respuesta.respuestaPregunta == 'No') {
          sexta = 'No';
          textSexta = '';
        } else {
          sexta = 'Si';
          textSexta = respuesta.respuestaPregunta;
        }
      } else if (respuesta.nombrePregunta == 'septima') {
        septima = respuesta.respuestaPregunta;
      } else {
        octava = respuesta.id
      }
    });

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
    let ruta;

    if (this.ficha){
      this.fichaService.updateFicha(values).subscribe(
        response => {
          alert('ficha actualizada');
        }
      )
      ruta = '/';
    } else {
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

      this.fichaService.crearFicha(values).subscribe(
        ficha => {
          alert('ficha creada');
        }
      );
        
      ruta = '/interno/rh/test'
    }

    setTimeout(() => {
      this.router.navigate([ruta]);
    }, 500);
      

  }



  deleteAllDOM() {
    if(document.getElementById('shared')){
      document.getElementById('shared').remove();
    }
  }
/*
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
*/
  toCapital(string:string){
    let words = string.split(' ');
    for (let i = 0; i < words.length; ++i) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  }

}
