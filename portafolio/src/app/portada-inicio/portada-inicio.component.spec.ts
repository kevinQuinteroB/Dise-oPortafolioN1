import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaInicioComponent } from './portada-inicio.component';

describe('PortadaInicioComponent', () => {
  let component: PortadaInicioComponent;
  let fixture: ComponentFixture<PortadaInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortadaInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortadaInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
