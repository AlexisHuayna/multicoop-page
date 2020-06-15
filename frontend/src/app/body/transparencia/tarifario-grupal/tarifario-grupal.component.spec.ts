import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifarioGrupalComponent } from './tarifario-grupal.component';

describe('TarifarioGrupalComponent', () => {
  let component: TarifarioGrupalComponent;
  let fixture: ComponentFixture<TarifarioGrupalComponent>;

  beforeEach(async(() => {
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
