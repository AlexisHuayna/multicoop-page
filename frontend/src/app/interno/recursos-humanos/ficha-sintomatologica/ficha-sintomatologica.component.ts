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
          }
        }
      );

    }
    
  }

  ngOnInit(): void {
    this.deleteAllDOM();
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
    console.log(values);
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
/*
    if(this.ficha) {
      const idPregunta = this.ficha.data[this.ficha.data.length - 1].respuesta.id;
      
      this.fichaService.updateTemperatura(idPregunta, values.octava);
    } else {
      this.fichaService.add(values).subscribe(
        status => {
  
        }
      );
    }
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
