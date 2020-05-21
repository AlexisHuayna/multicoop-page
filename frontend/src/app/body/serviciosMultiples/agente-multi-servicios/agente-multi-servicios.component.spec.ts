import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgenteMultiServiciosComponent } from './agente-multi-servicios.component';

describe('AgenteMultiServiciosComponent', () => {
  let component: AgenteMultiServiciosComponent;
  let fixture: ComponentFixture<AgenteMultiServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgenteMultiServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgenteMultiServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
