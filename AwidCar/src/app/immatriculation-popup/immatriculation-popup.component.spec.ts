import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmatriculationPopupComponent } from './immatriculation-popup.component';

describe('ImmatriculationPopupComponent', () => {
  let component: ImmatriculationPopupComponent;
  let fixture: ComponentFixture<ImmatriculationPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImmatriculationPopupComponent]
    });
    fixture = TestBed.createComponent(ImmatriculationPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
