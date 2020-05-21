import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupalMultiMujerComponent } from './grupal-multi-mujer.component';

describe('GrupalMultiMujerComponent', () => {
  let component: GrupalMultiMujerComponent;
  let fixture: ComponentFixture<GrupalMultiMujerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrupalMultiMujerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupalMultiMujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
