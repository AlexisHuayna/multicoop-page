import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TarifarioGrupalComponent } from './tarifario-grupal.component';

describe('TarifarioGrupalComponent', () => {
  let component: TarifarioGrupalComponent;
  let fixture: ComponentFixture<TarifarioGrupalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifarioGrupalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifarioGrupalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
