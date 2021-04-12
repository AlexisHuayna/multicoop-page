import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TarifarioConsumoMypeComponent } from './tarifario-consumo-mype.component';

describe('TarifarioConsumoMypeComponent', () => {
  let component: TarifarioConsumoMypeComponent;
  let fixture: ComponentFixture<TarifarioConsumoMypeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifarioConsumoMypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifarioConsumoMypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
