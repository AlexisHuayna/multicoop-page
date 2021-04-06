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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private sorteoService: SorteoService
  ) {
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

  deleteAllDOM() {
    if(document.getElementById('shared')){
      document.getElementById('shared').style.display = 'none'
    }
  }

  enviar(values){
    if(this.sorteoForm.invalid) {
      alert('Llene todos los campos');
    } else {
      this.sorteoService.addParticipante(values).subscribe(
      response => {
        var serverRespose = <server>response
        if(serverRespose.resp == 1) {
          this.router.navigate(['/ok']);
        } else {
          console.log(response);
          alert('Ops! Vuelva ha intentarlo');
        }
      }, err => {
        alert('Ops! Vuelva ha intentarlo');
        console.log(err);
      });
    }
  }

  goHome(){
    this.router.navigate(['/']);
    document.getElementById('shared').style.display = 'block';
  }

}
