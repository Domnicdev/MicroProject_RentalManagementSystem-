import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhouseComponent } from './viewhouse.component';

describe('ViewhouseComponent', () => {
  let component: ViewhouseComponent;
  let fixture: ComponentFixture<ViewhouseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewhouseComponent]
    });
    fixture = TestBed.createComponent(ViewhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
