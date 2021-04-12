import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PrecalificadorComponent } from './precalificador.component';

describe('PrecalificadorComponent', () => {
  let component: PrecalificadorComponent;
  let fixture: ComponentFixture<PrecalificadorComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecalificadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecalificadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
