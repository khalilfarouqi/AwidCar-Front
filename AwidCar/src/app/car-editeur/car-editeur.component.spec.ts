import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarEditeurComponent } from './car-editeur.component';

describe('CarEditeurComponent', () => {
  let component: CarEditeurComponent;
  let fixture: ComponentFixture<CarEditeurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarEditeurComponent]
    });
    fixture = TestBed.createComponent(CarEditeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
