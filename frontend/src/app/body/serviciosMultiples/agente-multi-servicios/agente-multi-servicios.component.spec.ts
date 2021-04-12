import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AgenteMultiServiciosComponent } from './agente-multi-servicios.component';

describe('AgenteMultiServiciosComponent', () => {
  let component: AgenteMultiServiciosComponent;
  let fixture: ComponentFixture<AgenteMultiServiciosComponent>;

  beforeEach(waitForAsync(() => {
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
