import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { interval, range } from 'rxjs';
import { SorteoService } from '../services/sorteo.service';
import { timer, } from 'rxjs';
import { take } from 'rxjs/operators';

interface server {
  resp: number;
}

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.css']
})

export class SorteoComponent implements OnInit {

  sorteoForm: FormGroup
  participantes = 5
  dis = false
  loader: any
  errx

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private sorteoService: SorteoService,
  ) {
    if(this.isFacebookApp()){
      window.open('https://www.multicoop.com.pe/sorteo', '_system');
    }
    
    this.deleteAllDOM();
    this.sorteoForm  = this.formBuilder.group({
      nombres: ['', Validators.compose([Validators.required])],
      apellidos: ['', Validators.compose([Validators.required])],
      telefono: ['', Validators.compose([Validators.required])],
      correo: ['', Validators.compose([Validators.required, Validators.email])],
      ciudad: ['', Validators.compose([Validators.required])]
    });
    //this.participantes = Math.floor(Math.random() * 100) + 30;
    //this.participantes = Math.floor(Math.random() * 100) + 30;
    
    const intervalCount = interval(130);
    const takeFive = intervalCount.pipe(take(this.participantes));
    takeFive.subscribe(x => {
      this.participantes = (x + 1)
    });


  }

  ngOnInit(): void {
    
  }

  isFacebookApp() {
    var ua = navigator.userAgent || navigator.vendor; // || window.opera;
    return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
  }

  deleteAllDOM() {
    if(document.getElementById('shared')){
      document.getElementById('shared').style.display = 'none'
    }
  }

  enviar(values){
    this.launchLoader();
    if(this.sorteoForm.invalid) {
      alert('Llene todos los campos');
      this.closeLoader();
    } else {
      this.sorteoService.addParticipante(values).subscribe(
      response => {
        var serverRespose = <server>response
        if(serverRespose.resp == 1) {
          this.router.navigate(['/ok']);
          this.closeLoader();
        } else {
          console.log(response);
          this.closeLoader();
          alert(response);
        }
      }, err => {
          alert(err.message);
          this.errx = err;
          console.log(err);
          this.closeLoader();
      });
    }
  }

  goHome(){
    this.router.navigate(['/']);
    document.getElementById('shared').style.display = 'block';
  }

  launchLoader(){
    this.dis = true;
  }

  closeLoader(){
    this.dis = false;
  }
}

