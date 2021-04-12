import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DenunciasComponent } from './denuncias.component';

describe('DenunciasComponent', () => {
  let component: DenunciasComponent;
  let fixture: ComponentFixture<DenunciasComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DenunciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenunciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
