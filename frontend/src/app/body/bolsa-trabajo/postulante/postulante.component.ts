import { Component, OnInit, Input, Output } from "@angular/core";
import { Oportunidad } from "src/app/other/interfaces";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { PostulanteService } from 'src/app/services/postulante.service';

@Component({
	selector: "app-postulante",
	templateUrl: "./postulante.component.html",
	styleUrls: ["./postulante.component.css"],
})
export class PostulanteComponent implements OnInit {
	@Input("oportunidad") oportunidad: Oportunidad;
	@Input("display") statusView: Boolean;

	postulanteForm: FormGroup;
	fileSelected: File = null;
	file_name = "Adjuntar mi CV";

	constructor(public postulanteService: PostulanteService,private _builder: FormBuilder, private router: Router) {
		this.postulanteForm = this._builder.group({
			nombres: ["", Validators.compose([Validators.required, Validators.minLength(2)])],
			apellidos: ["", Validators.compose([Validators.required, Validators.minLength(2)])],
			curriculum: ["", Validators.required],
		});
	}

	ngOnInit(): void {}

	addPostulante(postulante) {
		this.postulanteService.agregarPostulante(this.fileSelected, postulante);
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
		this.fileSelected = file.item(0)
	}
}
