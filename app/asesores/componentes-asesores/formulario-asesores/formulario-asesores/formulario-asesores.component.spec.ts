import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAsesoresComponent } from './formulario-asesores.component';

describe('FormularioAsesoresComponent', () => {
  let component: FormularioAsesoresComponent;
  let fixture: ComponentFixture<FormularioAsesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAsesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAsesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
