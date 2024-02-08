import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseownercrudComponent } from './houseownercrud.component';

describe('HouseownercrudComponent', () => {
  let component: HouseownercrudComponent;
  let fixture: ComponentFixture<HouseownercrudComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HouseownercrudComponent]
    });
    fixture = TestBed.createComponent(HouseownercrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
