import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantoperationsComponent } from './tenantoperations.component';

describe('TenantoperationsComponent', () => {
  let component: TenantoperationsComponent;
  let fixture: ComponentFixture<TenantoperationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenantoperationsComponent]
    });
    fixture = TestBed.createComponent(TenantoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
