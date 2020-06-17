import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  flag_tarifarios: boolean = false

  constructor() { }

  ngOnInit(): void {
  }


  responsiveController() {
    var x = document.getElementById("myTopnav");
    if (x.className === "container-nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "container-nav-bar";
    }
  }

  mostrarTarifarios(event){
    let content = document.getElementsByClassName('sub-content');

    if(!this.flag_tarifarios){

      for(var i = 0; i < content.length; ++i){
        var sub_content = content[i];
        (<HTMLElement> sub_content).style.display = 'block'
      }
      
    }else{
      
      for(var i = 0; i < content.length; ++i){
        var sub_content = content[i];
        (<HTMLElement> sub_content).style.display = 'none'
      }

    }
    this.flag_tarifarios = !this.flag_tarifarios
  }


}
