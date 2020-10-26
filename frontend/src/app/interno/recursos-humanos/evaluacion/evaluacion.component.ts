import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { interval } from 'rxjs';
import { Personal } from 'src/app/other/interfaces';
import { FichaSintomasService } from 'src/app/services/ficha-sintomas.service';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit, OnDestroy {

  public evaluacionForm: FormGroup
  public empleado: Personal
  
  public subscription
  public restTime:number
  public timeOut

  public nombreEvaluacion
  public nombreEmpleado
  public tipoEval

  constructor (
    private builder: FormBuilder,
    private fichaService: FichaSintomasService,
    private router: Router,
    private route: ActivatedRoute) { 

    this.evaluacionForm = this.builder.group({
        idPersonal: [],
        tipo: [],
        p1: ['', Validators.compose([Validators.required])],
        p2: ['', Validators.compose([Validators.required])],
        p3: ['', Validators.compose([Validators.required])],
        p4: ['', Validators.compose([Validators.required])],
        p5: [],
        p5a: [],
        p5b: [],
        p5c: [],
        p6: ['', Validators.compose([Validators.required])],
        p7: ['', Validators.compose([Validators.required])],
        p8: ['', Validators.compose([Validators.required])],
        p9: ['', Validators.compose([Validators.required])],
        p10: ['', Validators.compose([Validators.required])],
        p11: ['', Validators.compose([Validators.required])],
        p12: ['', Validators.compose([Validators.required])],
        p13: ['', Validators.compose([Validators.required])],
        p14: ['', Validators.compose([Validators.required])],
        p15: ['', Validators.compose([Validators.required])],
        p16: ['', Validators.compose([Validators.required])],
        p17: ['', Validators.compose([Validators.required])],
        p18: ['', Validators.compose([Validators.required])],
        p19: ['', Validators.compose([Validators.required])],
        p20: ['', Validators.compose([Validators.required])]
    });

    if (this.route.snapshot.paramMap.has('empleado')) {
      let id_empleado = this.route.snapshot.paramMap.get('empleado');
      let id_ficha = this.route.snapshot.paramMap.get('ficha');
      this.tipoEval = id_ficha
      
      fichaService.getEmpleado(id_empleado).subscribe(
        empleadoResponse => {
          this.empleado = empleadoResponse[0];

          this.nombreEmpleado = this.toCapital(this.empleado.apellidoPaterno + ' ' + this.empleado.apellidoMaterno + ' ' + this.empleado.nombres)

          this.evaluacionForm.patchValue({
            idPersonal: this.empleado.id
          });

        }
      );

      if(id_ficha == '3') {
        this.nombreEvaluacion = 'PRIMERA EVALUACIONDE REGLAMENTO DE SEGURIDAD Y SALUD EN EL TRABAJO'
        this.evaluacionForm.patchValue({
          tipo: 'sst',
        });
      } else {
        this.nombreEvaluacion = 'PRIMERA EVALUACION DE REGLAMENTO INTERNO DE TRABAJO'
        this.evaluacionForm.patchValue({
          tipo: 'rit'
        });
      }

    }
    
    try {
      fichaService.getServerTime().subscribe(
        timeResponse => {
          let timeServer = new Date(timeResponse.time);

          if(this.tipoEval == '3' ) {
            this.restTime = (40 - timeServer.getMinutes()) * 60000
          } else{
            this.restTime =  (60 - timeServer.getMinutes()) * 60000
          } 

          this.timeOut = setTimeout(this.finishExam, this.restTime)
        }
      );
    } catch (error) {
    }
    
  }

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe( some => {
      this.restTime = this.restTime - 1000;
    })
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    clearTimeout(this.timeOut);
  }

  finishExam(){
    var a = document.getElementById("enviarButton")
    a.click();
  }

  secondsToTime(time){
    let timeOnSeconds = Math.floor(time / 1000)
    let minutes = Math.floor(timeOnSeconds / 60);
    let seconds = timeOnSeconds % 60;

    return minutes + ':' + (seconds.toString().length == 1 ? '0' + seconds : seconds); 
  }

  toCapital(string:string){
    let words = string.split(' ');
    for (let i = 0; i < words.length; ++i) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  }

  enviar(values){
    clearTimeout(this.timeOut);
    
    if(this.tipoEval == '4'){
      values.p5 = values.p5a + '|' + values.p5b + '|' + values.p5c
    }

    this.fichaService.crearEvaluacion(values).subscribe(r => {
    });

    if(this.tipoEval == '3') {
      alert("Evaluacion SST terminada");
      this.router.navigate(['/interno/rh/evaluacion']);

    } else {
      alert("Evaluacion RIT terminada");
      this.router.navigate(['/']);
    }

    clearTimeout(this.timeOut);
  }
}
