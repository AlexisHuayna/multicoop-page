import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InternoComponent } from './interno.component';

describe('InternoComponent', () => {
  let component: InternoComponent;
  let fixture: ComponentFixture<InternoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InternoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
