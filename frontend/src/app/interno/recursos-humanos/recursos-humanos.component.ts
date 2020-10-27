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

  public sst = false
  public rit = false

  constructor(private fichaService: FichaSintomasService,) {
    try {
      fichaService.getServerTime().subscribe(
        timeResponse => {
          let timeServer = new Date(timeResponse.time);
          timeServer.getHours()
          this.validateSst(timeServer)
          this.validateRit(timeServer)
        }
      );
    } catch (error) {
    }
  }

  ngOnInit(): void {
  }

  validateSst(time){
    if(time.getHours() - 8 == 0 && time.getMinutes() - 19 > 0 && 41 - time.getMinutes() > 0){
      this.sst = true
    } else {
      this.sst = false
    }
  }

  validateRit(time){
    if((time.getHours() - 8 == 0 && time.getMinutes() - 49 > 0 && 61 - time.getMinutes() > 0) ||
      time.getHours() - 9 == 0 && 11 - time.getMinutes() > 0 ){
      this.rit = true
    } else {
      this.rit = false
    }
  }

}
