import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrentComponent } from './payrent.component';

describe('PayrentComponent', () => {
  let component: PayrentComponent;
  let fixture: ComponentFixture<PayrentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayrentComponent]
    });
    fixture = TestBed.createComponent(PayrentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
