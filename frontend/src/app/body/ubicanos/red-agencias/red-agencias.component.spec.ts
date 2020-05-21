import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedAgenciasComponent } from './red-agencias.component';

describe('RedAgenciasComponent', () => {
  let component: RedAgenciasComponent;
  let fixture: ComponentFixture<RedAgenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedAgenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedAgenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
