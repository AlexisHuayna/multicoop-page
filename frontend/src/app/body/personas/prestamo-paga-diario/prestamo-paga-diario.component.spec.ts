import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrestamoPagaDiarioComponent } from './prestamo-paga-diario.component';

describe('PrestamoPagaDiarioComponent', () => {
  let component: PrestamoPagaDiarioComponent;
  let fixture: ComponentFixture<PrestamoPagaDiarioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoPagaDiarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoPagaDiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
