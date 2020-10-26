import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { FichaSintomasService } from 'src/app/services/ficha-sintomas.service';
//import { HelpersComponent } from 'src/app/helpers/helpers.component';

@Component({
  selector: 'app-recursos-humanos',
  templateUrl: './recursos-humanos.component.html',
  styleUrls: ['./recursos-humanos.component.css']
})
export class RecursosHumanosComponent implements OnInit {

  public sst = true
  public rit = true

  constructor(private fichaService: FichaSintomasService,) {
    try {
      fichaService.getServerTime().subscribe(
        timeResponse => {
          let timeServer = new Date(timeResponse.time);
          timeServer.getHours()
          this.validateSst(timeServer)
          this.validateRit(timeResponse)
        }
      );
    } catch (error) {
    }
  }

  ngOnInit(): void {
  }

  validateSst(time){
    if(time.getHours() - 9 == 0 && time.getMinutes() - 19 > 0 && 41 - time.getMinutes() > 0){
      this.sst = true
    }
  }

  validateRit(time){
    if((time.getHours() - 8 == 0 && time.getMinutes() - 49 > 0 && 61 - time.getMinutes() > 0) ||
      time.getHours() - 9 == 0 && 11 - time.getMinutes() > 0 ){
      this.rit = true
    }
  }

}
