import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComoayudarComponent } from './comoayudar.component';

describe('ComoayudarComponent', () => {
  let component: ComoayudarComponent;
  let fixture: ComponentFixture<ComoayudarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComoayudarComponent]
    });
    fixture = TestBed.createComponent(ComoayudarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
