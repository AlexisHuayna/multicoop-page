import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OportunidadDetallesComponent } from './oportunidad-detalles.component';

describe('OportunidadDetallesComponent', () => {
  let component: OportunidadDetallesComponent;
  let fixture: ComponentFixture<OportunidadDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OportunidadDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OportunidadDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
