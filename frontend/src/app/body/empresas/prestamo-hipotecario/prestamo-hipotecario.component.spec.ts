import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrestamoHipotecarioComponent } from './prestamo-hipotecario.component';

describe('PrestamoHipotecarioComponent', () => {
  let component: PrestamoHipotecarioComponent;
  let fixture: ComponentFixture<PrestamoHipotecarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoHipotecarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoHipotecarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
