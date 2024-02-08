import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewhouseownersComponent } from './viewhouseowners.component';

describe('ViewhouseownersComponent', () => {
  let component: ViewhouseownersComponent;
  let fixture: ComponentFixture<ViewhouseownersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewhouseownersComponent]
    });
    fixture = TestBed.createComponent(ViewhouseownersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
