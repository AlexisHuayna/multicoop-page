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
			curriculum: [null, Validators.required],
		});
	}

	ngOnInit(): void {}

	postular(values) {
		this.postulanteService.agregarPostulante(this.joinData(values, this.fileSelected)).subscribe(response => console.log(), err => console.log());	
    	alert("Gracias por postular estaremos en contacto");
    	this.router.navigate(['/']);
	}

	joinData<T>(formdata: T, file: File){
		const postulante = new FormData();

		postulante.append('nombres', formdata['nombres'])
		postulante.append('apellidos', formdata['apellidos'])
		postulante.append('cargo', this.oportunidad.cargo)
		postulante.append('agencia', this.oportunidad.codigo)
		postulante.append('curriculum', file)
		
		return postulante
	}

	updateFileName(file){
		this.file_name = file[0]['name']
		this.fileSelected = file.item(0)
	}
}
