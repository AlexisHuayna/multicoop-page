import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gracias',
  templateUrl: './gracias.component.html',
  styleUrls: ['./gracias.component.css']
})
export class GraciasComponent implements OnInit {

  constructor() { this.deleteAllDOM(); }

  ngOnInit(): void {
    
  }

  deleteAllDOM() {
    if(document.getElementById('shared')){
      document.getElementById('shared').style.display = 'none'
    }
  }

}
