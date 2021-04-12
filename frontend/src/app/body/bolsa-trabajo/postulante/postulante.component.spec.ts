import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PostulanteComponent } from './postulante.component';

describe('PostulanteComponent', () => {
  let component: PostulanteComponent;
  let fixture: ComponentFixture<PostulanteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
