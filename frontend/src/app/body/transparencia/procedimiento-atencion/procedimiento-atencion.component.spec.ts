import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedimientoAtencionComponent } from './procedimiento-atencion.component';

describe('ProcedimientoAtencionComponent', () => {
  let component: ProcedimientoAtencionComponent;
  let fixture: ComponentFixture<ProcedimientoAtencionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedimientoAtencionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedimientoAtencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
