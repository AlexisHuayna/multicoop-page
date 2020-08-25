import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaSintomatologicaComponent } from './ficha-sintomatologica.component';

describe('FichaSintomatologicaComponent', () => {
  let component: FichaSintomatologicaComponent;
  let fixture: ComponentFixture<FichaSintomatologicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaSintomatologicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaSintomatologicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
