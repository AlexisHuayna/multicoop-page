import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefonosContactoComponent } from './telefonos-contacto.component';

describe('TelefonosContactoComponent', () => {
  let component: TelefonosContactoComponent;
  let fixture: ComponentFixture<TelefonosContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefonosContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefonosContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
