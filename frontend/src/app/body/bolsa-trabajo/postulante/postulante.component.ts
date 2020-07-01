import { Component, OnInit, Input, Output } from "@angular/core";
import { Oportunidad } from "src/app/other/interfaces";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
	selector: "app-postulante",
	templateUrl: "./postulante.component.html",
	styleUrls: ["./postulante.component.css"],
})
export class PostulanteComponent implements OnInit {
	@Input("oportunidad") oportunidad: Oportunidad;
	@Input("display") statusView: Boolean;

	postulanteForm: FormGroup;
	file_name = "Adjuntar mi CV"

	constructor(private _builder: FormBuilder, private router: Router) {
		this.postulanteForm = this._builder.group({
			nombres: ["", Validators.required],
			apellidos: ["", Validators.required],
			curriculum: ["", Validators.required],
		});
	}

	ngOnInit(): void {}

	addPostulante(postulante) {
		console.log(postulante);
	}

	postular(values) {
		this.addPostulante(values);
		/*
    alert("Gracias por postular estaremos en contacto")
    this.router.navigate(['/'])
    */
	}

	updateFileName(file){
		this.file_name = file[0]['name']	
	}
}
