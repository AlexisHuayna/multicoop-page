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
      console.log('time');
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
            this.sintomatologiaForm.controls['septima'].disable();
            this.sintomatologiaForm.patchValue({
              octava: '36.5'
            });

          } else {
            this.sintomatologiaForm.get('septima').setValidators([Validators.required]);
            this.sintomatologiaForm.get('septima').updateValueAndValidity();
            this.sintomatologiaForm.controls['octava'].disable();
            this.sintomatologiaForm.patchValue({
              septima: '36.5'
            })

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

          this.sintomatologiaForm.get('textCuarta').setValidators(Validators.required);
          this.sintomatologiaForm.get('textCuarta').updateValueAndValidity();

          this.sintomatologiaForm.get('textCuarta').valueChanges.subscribe(
            value2 => {
              if (value2 == 'Otros') {
                console.log(value2);
                this.sintomatologiaForm.get('otrosCuarta').setValidators(Validators.required);
                this.sintomatologiaForm.get('otrosCuarta').updateValueAndValidity();

              } else {
                this.sintomatologiaForm.get('otrosCuarta').clearValidators();
                this.sintomatologiaForm.get('otrosCuarta').updateValueAndValidity();

              }
            }
          );

        } else {
          this.sintomatologiaForm.get('textCuarta').clearValidators();
          this.sintomatologiaForm.get('textCuarta').updateValueAndValidity();
        }
      }
    )

    this.sintomatologiaForm.get('quinta').valueChanges.subscribe(
      value => {
        if (value == 'Si') {
          this.sintomatologiaForm.get('textQuinta').setValidators(Validators.required);
          this.sintomatologiaForm.get('textQuinta').updateValueAndValidity();
        } else {
          this.sintomatologiaForm.get('textQuinta').clearValidators();
          this.sintomatologiaForm.get('textQuinta').updateValueAndValidity();
        }
      }
    )

    this.sintomatologiaForm.get('sexta').valueChanges.subscribe(
      value => {
        if (value == 'Si') {
          this.sintomatologiaForm.get('textSexta').setValidators(Validators.required)
          this.sintomatologiaForm.get('textSexta').updateValueAndValidity();
        } else {
          this.sintomatologiaForm.get('textSexta').clearAsyncValidators();
          this.sintomatologiaForm.get('textSexta').updateValueAndValidity();
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
    console.log(this.ficha);
  }

  llenarEmpleado() {
    let full_name = this.empleado.apellidoPaterno + ' ' + this.empleado.apellidoMaterno + ' ' + this.empleado.nombres;
    this.sintomatologiaForm.patchValue({
      apellidosNombres: this.toCapital(full_name),
      area: this.toCapital(this.empleado.area),
      dni: this.empleado.dni,
      direccion: this.empleado.direccion,
      celular: this.empleado.celular
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
    if (this.ficha){
      console.log('Actualizar Respuesta');
      // Update Respuesta de ficha

    } else {
      
      this.sintomatologiaForm.patchValue({
        idPersonal: this.empleado.id
      });

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

      console.log('Crear ficha');
      // Create Ficha
    }

    console.log(values)
    /*
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

*/
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

  toCapital(string:string){
    let words = string.split(' ');
    for (let i = 0; i < words.length; ++i) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  }

}
