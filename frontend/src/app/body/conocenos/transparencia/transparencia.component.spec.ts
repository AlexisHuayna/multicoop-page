import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TransparenciaComponent } from './transparencia.component';

describe('TransparenciaComponent', () => {
  let component: TransparenciaComponent;
  let fixture: ComponentFixture<TransparenciaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TransparenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransparenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
