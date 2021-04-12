import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FichaSintomatologicaComponent } from './ficha-sintomatologica.component';

describe('FichaSintomatologicaComponent', () => {
  let component: FichaSintomatologicaComponent;
  let fixture: ComponentFixture<FichaSintomatologicaComponent>;

  beforeEach(waitForAsync(() => {
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
