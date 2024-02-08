import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantcrudComponent } from './tenantcrud.component';

describe('TenantcrudComponent', () => {
  let component: TenantcrudComponent;
  let fixture: ComponentFixture<TenantcrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenantcrudComponent]
    });
    fixture = TestBed.createComponent(TenantcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
