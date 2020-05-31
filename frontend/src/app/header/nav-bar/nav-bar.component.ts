import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

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


}
