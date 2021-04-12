import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReclamacionesComponent } from './reclamaciones.component';

describe('ReclamacionesComponent', () => {
  let component: ReclamacionesComponent;
  let fixture: ComponentFixture<ReclamacionesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
