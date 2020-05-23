import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecalificadorComponent } from './precalificador.component';

describe('PrecalificadorComponent', () => {
  let component: PrecalificadorComponent;
  let fixture: ComponentFixture<PrecalificadorComponent>;

  beforeEach(async(() => {
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
