import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaReactiveComponent } from './carga-reactive.component';

describe('CargaReactiveComponent', () => {
  let component: CargaReactiveComponent;
  let fixture: ComponentFixture<CargaReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
