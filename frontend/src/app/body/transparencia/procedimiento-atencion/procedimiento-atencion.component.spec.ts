import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProcedimientoAtencionComponent } from './procedimiento-atencion.component';

describe('ProcedimientoAtencionComponent', () => {
  let component: ProcedimientoAtencionComponent;
  let fixture: ComponentFixture<ProcedimientoAtencionComponent>;

  beforeEach(waitForAsync(() => {
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
