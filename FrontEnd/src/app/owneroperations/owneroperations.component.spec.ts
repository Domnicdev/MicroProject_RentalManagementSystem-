import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwneroperationsComponent } from './owneroperations.component';

describe('OwneroperationsComponent', () => {
  let component: OwneroperationsComponent;
  let fixture: ComponentFixture<OwneroperationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwneroperationsComponent]
    });
    fixture = TestBed.createComponent(OwneroperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
