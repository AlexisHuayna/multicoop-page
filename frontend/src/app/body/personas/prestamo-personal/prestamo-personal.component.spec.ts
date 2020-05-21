import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoPersonalComponent } from './prestamo-personal.component';

describe('PrestamoPersonalComponent', () => {
  let component: PrestamoPersonalComponent;
  let fixture: ComponentFixture<PrestamoPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
