import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { ReviewComponent } from './review.component';

describe('Add Review Testing', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReviewComponent],
      imports: [HttpClientModule, ReactiveFormsModule,
        AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, MatToolbarModule, MatButtonModule
        , MatTabsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDividerModule, BrowserAnimationsModule]
    }).compileComponents();
  });
  

  // beforeEach(() => TestBed.configureTestingModule({
  //   imports: [HttpClientTestingModule], 
  //   providers: [EmpserviceService]
  // }));

  it('Add Review Component Test', () => {
    const fixture = TestBed.createComponent(ReviewComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

  });
  it('Add Review Form GUI Input count', () => {
    const fixture = TestBed.createComponent(ReviewComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(3);
  });
  it('Add Review Form GUI Button count', () => {
    const fixture = TestBed.createComponent(ReviewComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(1);
  });
  it('Testing Form validation (for Add Review)', () => {
    const fixture = TestBed.createComponent(ReviewComponent);
    const Review = fixture.componentInstance;
    Review.myform.controls?.['reviewId'].setValue("65");
    Review.myform.controls?.['userReview'].setValue("Its very neat");
    Review.myform.controls?.['houseId'].setValue("102");




    expect(Review.myform.valid).toBeTruthy();;
  })

  it('Testing Form initial values(Add Review)', () => {
    const fixture = TestBed.createComponent(ReviewComponent);
    const app = fixture.componentInstance;
    const loginFormGroup = app.myform;
    const loginFormValues = {

      reviewId: '',
      userReview: '',
      houseId: ''
      

    }
    expect(loginFormGroup.value).toEqual(loginFormValues);
  });

});