import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasasPasivasComponent } from './tasas-pasivas.component';

describe('TasasPasivasComponent', () => {
  let component: TasasPasivasComponent;
  let fixture: ComponentFixture<TasasPasivasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasasPasivasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasasPasivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
