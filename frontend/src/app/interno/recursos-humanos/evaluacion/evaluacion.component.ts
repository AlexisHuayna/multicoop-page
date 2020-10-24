import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { FichaSintomasService } from 'src/app/services/ficha-sintomas.service';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css']
})
export class EvaluacionComponent implements OnInit, OnDestroy {

  public restTime:number
  public subscription
  public maxTime

  constructor(private fichaService: FichaSintomasService) { 
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
}
