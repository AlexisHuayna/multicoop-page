import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoConsumoComponent } from './prestamo-consumo.component';

describe('PrestamoConsumoComponent', () => {
  let component: PrestamoConsumoComponent;
  let fixture: ComponentFixture<PrestamoConsumoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoConsumoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoConsumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
