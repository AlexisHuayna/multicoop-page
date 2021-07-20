import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DenunciasService } from 'src/app/services/denuncias.service';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { NgxUiLoaderService, SPINNER } from 'ngx-ui-loader';

export interface Personal{
  Personal: string;
}

@Component({
  selector: 'app-denuncias',
  templateUrl: './denuncias.component.html',
  styleUrls: ['./denuncias.component.css']
})
export class DenunciasComponent implements OnInit {

  @ViewChild('DatosDenunciante') contenedorDatos;

  denunciasForm: FormGroup

  anonimo = true;

  disable = false;

  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allFruits: string[] = [];
  involucradosHelper = "";

  panelOpenState = false;
	fileSelected: File = null;
  
  loader = SPINNER.squareLoader;

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(
    private _builder: FormBuilder,
    private denunciasService: DenunciasService,
    private router: Router,
    private ngxLoader: NgxUiLoaderService
  ) {
    this.denunciasForm = this._builder.group({
      agencia: ['01', Validators.compose([Validators.required])],
      anonimo: ['si', Validators.compose([Validators.required])],
      nombres: ['',],
      apellidos: ['',],
      tipoDocumento: ['dni',],
      numeroDocumento: ['',],
      telefono: ['',],
      correo: ['',],
      puesto: ['',],
      incidencia: ['', Validators.compose([Validators.required])],
      incidente: ['', Validators.compose([Validators.required])],
      otrosIncidente: [{ value: '', disabled: true },],
      involucrados: ['',],
      involucradosHelp: [''],
      detalleIncidente: ['', Validators.compose([Validators.required])],
      veracidad: [false, Validators.compose([Validators.requiredTrue])],
      evidencias: [null]
    });

    this.denunciasService.getPersonal().subscribe(
      personal => {
        let p = personal as Personal[];
        for(let i = 0; i < p.length; ++i){
          this.allFruits.push(p[i].Personal.toUpperCase());
        }
      }
    );

    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  ngOnInit(): void {
    this.deleteAllDOM();
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.denunciasForm.get('involucrados').setValue(null);
    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  anonimoController(evt){
    let opcion = evt.value;
    
    if (opcion === 'no') {
      this.anonimo = false

      this.denunciasForm.get('nombres').setValidators(Validators.required);
      this.denunciasForm.get('nombres').updateValueAndValidity();

      this.denunciasForm.get('apellidos').setValidators(Validators.required);
      this.denunciasForm.get('apellidos').updateValueAndValidity();
      
      this.denunciasForm.get('tipoDocumento').setValidators(Validators.required);
      this.denunciasForm.get('tipoDocumento').updateValueAndValidity();

      this.denunciasForm.get('numeroDocumento').setValidators(Validators.required);
      this.denunciasForm.get('numeroDocumento').updateValueAndValidity();

      this.denunciasForm.get('telefono').setValidators(Validators.required);
      this.denunciasForm.get('telefono').updateValueAndValidity();

      this.denunciasForm.get('correo').setValidators(Validators.required);
      this.denunciasForm.get('correo').updateValueAndValidity();

      this.denunciasForm.get('puesto').setValidators(Validators.required);
      this.denunciasForm.get('puesto').updateValueAndValidity();
    } else if(opcion === 'si'){
      this.anonimo = true

      this.denunciasForm.get('nombres').clearValidators();
      this.denunciasForm.get('nombres').updateValueAndValidity();

      this.denunciasForm.get('apellidos').clearValidators();
      this.denunciasForm.get('apellidos').updateValueAndValidity();

      this.denunciasForm.get('tipoDocumento').clearValidators();
      this.denunciasForm.get('tipoDocumento').updateValueAndValidity();

      this.denunciasForm.get('numeroDocumento').clearValidators();
      this.denunciasForm.get('numeroDocumento').updateValueAndValidity();

      this.denunciasForm.get('telefono').clearValidators();
      this.denunciasForm.get('telefono').updateValueAndValidity();

      this.denunciasForm.get('correo').clearValidators();
      this.denunciasForm.get('correo').updateValueAndValidity();

      this.denunciasForm.get('puesto').clearValidators();
      this.denunciasForm.get('puesto').updateValueAndValidity();
    } else {
      console.log("ERROR");
    }
    
  }

  disableOtros() {
    let otrosForm = this.denunciasForm.get('otrosIncidente')
    
    otrosForm.disable();
    otrosForm.clearValidators();
    otrosForm.updateValueAndValidity();
  }

  enableOtros() {
    let otrosForm = this.denunciasForm.get('otrosIncidente')

    otrosForm.enable();
    otrosForm.setValidators(Validators.required);
    otrosForm.updateValueAndValidity();
  }

  denunciar(values): void {
    this.ngxLoader.start();
    const formData = new FormData();

    this.disable = true;
    this.fruits.push(this.involucradosHelper);

    this.involucradosHelper = "";

    values['evidencias'] = this.fileSelected;

    values['involucrados'] = this.fruits.join('|');
    
    if (values['incidente'] === 'otros') {
      values['incidente'] = values['otrosIncidente'];
    }

    values['incidencia'] = (new Date(values['incidencia'])).toISOString().substring(0, 10);

    formData.append('agencia', values['agencia']);
    formData.append('anonimo', values['anonimo']);
    formData.append('nombres', values['nombres']);
    formData.append('apellidos', values['apellidos']);
    formData.append('tipoDocumento', values['tipoDocumento']);
    formData.append('numeroDocumento', values['numeroDocumento']);
    formData.append('telefono', values['telefono']);
    formData.append('correo', values['correo']);
    formData.append('puesto', values['puesto']);
    formData.append('incidencia', values['incidencia']);
    formData.append('incidente', values['incidente']);
    formData.append('involucrados', values['involucrados']);
    formData.append('detalleIncidente', values['detalleIncidente']);
    formData.append('evidencias', this.fileSelected);

    this.denunciasService.addDenuncia(formData).subscribe(
      res => {
        this.disable = false;
        this.ngxLoader.stop();
        alert("Su denuncia fue procesada estaremos en contacto.");
        document.getElementById('shared').style.display = 'block';
        this.router.navigate(['/']);
      }, err => {
        this.disable = false;
        this.ngxLoader.stop();
        alert("Algo malo ocurrio, intentelo mas tarde");
        document.getElementById('shared').style.display = 'block';
        this.router.navigate(['/']);
      }
    );
    
  }

  deleteAllDOM() {
    if(document.getElementById('shared')){
      document.getElementById('shared').style.display = 'none'
    }
  }
  
	updateFileName(files){
    this.fileSelected = files[0];
	}

}
