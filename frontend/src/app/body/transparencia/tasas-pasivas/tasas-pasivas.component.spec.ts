import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TasasPasivasComponent } from './tasas-pasivas.component';

describe('TasasPasivasComponent', () => {
  let component: TasasPasivasComponent;
  let fixture: ComponentFixture<TasasPasivasComponent>;

  beforeEach(waitForAsync(() => {
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
