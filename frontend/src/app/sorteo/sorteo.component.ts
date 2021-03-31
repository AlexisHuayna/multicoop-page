import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sorteo',
  templateUrl: './sorteo.component.html',
  styleUrls: ['./sorteo.component.css']
})
export class SorteoComponent implements OnInit {

  sorteoForm: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.deleteAllDOM();
    this.sorteoForm  = this.formBuilder.group({
      nombres: ['', Validators.compose([Validators.required])],
      apellidos: ['', Validators.compose([Validators.required])],
      telefono: ['', Validators.compose([Validators.required])],
      correo: ['', Validators.compose([Validators.required])],
      ciudad: ['', Validators.compose([Validators.required])]
    })
  }

  ngOnInit(): void {
    
  }

  deleteAllDOM() {
    if(document.getElementById('shared')){
      document.getElementById('shared').style.display = 'none'
    }
  }

  enviar(values){

  }

}
