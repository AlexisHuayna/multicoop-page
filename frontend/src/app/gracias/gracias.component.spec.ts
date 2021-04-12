import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GraciasComponent } from './gracias.component';

describe('GraciasComponent', () => {
  let component: GraciasComponent;
  let fixture: ComponentFixture<GraciasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GraciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
