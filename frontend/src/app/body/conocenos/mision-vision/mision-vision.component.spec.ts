import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MisionVisionComponent } from './mision-vision.component';

describe('MisionVisionComponent', () => {
  let component: MisionVisionComponent;
  let fixture: ComponentFixture<MisionVisionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MisionVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisionVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
