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
  public maxTime

  public nombreEvaluacion
  public nombreEmpleado

  public p1
  public p2
  public p3
  public p4
  public p5
  public p6
  public p7
  public p8
  public p9
  public p10
  public p11
  public p12
  public p13
  public p14
  public p15
  public p16
  public p17
  public p18
  public p19
  public p20

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
        this.sst();
      } else {
        this.nombreEvaluacion = 'PRIMERA EVALUACION DE REGLAMENTO INTERNO DE TRABAJO'
        this.evaluacionForm.patchValue({
          tipo: 'rit'
        });
        this.rit();
      }

    }
    
    this.restTime = 1200;
    this.maxTime = "09:20"
    try {
      fichaService.getServerTime().subscribe(
        timeResponse => {
          let timeServer = new Date(timeResponse.time);
          console.log(timeServer.getHours() + ' ' + timeServer.getMinutes() + ' ' + timeServer.getSeconds());
          console.log(timeResponse);
        }
      );
    } catch (error) {
    }
    
  }

  ngOnInit(): void {
    setTimeout(this.finishExam, 60000)
    //setInterval(this.updateTime, 1000)
    this.subscription = interval(1000).subscribe( some => {
      this.restTime = this.restTime - 1;
    })
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  finishExam(){
    alert("Idea");
  }

  secondsToTime(time){
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    return minutes + ':' + (seconds.toString().length == 1 ? '0' + seconds : seconds); 
  }

  getRestTime(time) {
    
  }

  toCapital(string:string){
    let words = string.split(' ');
    for (let i = 0; i < words.length; ++i) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  }

  enviar(values){
    console.log(values)
  }

  sst(){
  }

  rit() {
  }
}
