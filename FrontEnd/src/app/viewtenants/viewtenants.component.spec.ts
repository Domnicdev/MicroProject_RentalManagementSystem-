import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtenantsComponent } from './viewtenants.component';

describe('ViewtenantsComponent', () => {
  let component: ViewtenantsComponent;
  let fixture: ComponentFixture<ViewtenantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewtenantsComponent]
    });
    fixture = TestBed.createComponent(ViewtenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
