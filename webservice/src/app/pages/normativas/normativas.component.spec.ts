import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NormativasComponent } from './normativas.component';

describe('NormativasComponent', () => {
  let component: NormativasComponent;
  let fixture: ComponentFixture<NormativasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NormativasComponent]
    });
    fixture = TestBed.createComponent(NormativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
