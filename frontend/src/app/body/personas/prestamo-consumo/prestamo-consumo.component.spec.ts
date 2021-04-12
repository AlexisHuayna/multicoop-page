import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrestamoConsumoComponent } from './prestamo-consumo.component';

describe('PrestamoConsumoComponent', () => {
  let component: PrestamoConsumoComponent;
  let fixture: ComponentFixture<PrestamoConsumoComponent>;

  beforeEach(waitForAsync(() => {
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
