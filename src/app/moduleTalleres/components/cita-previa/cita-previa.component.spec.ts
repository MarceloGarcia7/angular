import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaPreviaComponent } from './cita-previa.component';

describe('CitaPreviaComponent', () => {
  let component: CitaPreviaComponent;
  let fixture: ComponentFixture<CitaPreviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitaPreviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitaPreviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
