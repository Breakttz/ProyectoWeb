import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilnormalComponent } from './perfilnormal.component';

describe('PerfilnormalComponent', () => {
  let component: PerfilnormalComponent;
  let fixture: ComponentFixture<PerfilnormalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilnormalComponent]
    });
    fixture = TestBed.createComponent(PerfilnormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
