import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-helpers',
  templateUrl: './helpers.component.html',
  styleUrls: ['./helpers.component.css']
})
export class HelpersComponent implements OnInit {

  @Input() props: { titulo: String; mensaje: String;  ruta: String; };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  show(){
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(() => {
      x.className = x.className.replace("show", "");
      this.router.navigate([this.props.ruta]);
    }, 2500);
  }

}
