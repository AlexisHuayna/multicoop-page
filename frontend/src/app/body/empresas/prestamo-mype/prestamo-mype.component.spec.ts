import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestamoMypeComponent } from './prestamo-mype.component';

describe('PrestamoMypeComponent', () => {
  let component: PrestamoMypeComponent;
  let fixture: ComponentFixture<PrestamoMypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrestamoMypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestamoMypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
