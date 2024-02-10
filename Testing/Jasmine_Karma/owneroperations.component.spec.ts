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
import { OwneroperationsComponent } from './owneroperations.component';

describe('Insert House Testing', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwneroperationsComponent],
      imports: [HttpClientModule, ReactiveFormsModule,
        AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, MatToolbarModule, MatButtonModule
        , MatTabsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDividerModule, BrowserAnimationsModule]
    }).compileComponents();
  });
  

  // beforeEach(() => TestBed.configureTestingModule({
  //   imports: [HttpClientTestingModule], 
  //   providers: [EmpserviceService]
  // }));

  it('House Component Test', () => {
    const fixture = TestBed.createComponent(OwneroperationsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

  });
  it('House Insert Form GUI Input count', () => {
    const fixture = TestBed.createComponent(OwneroperationsComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(5);
  });
  it('House Insert Form GUI Button count', () => {
    const fixture = TestBed.createComponent(OwneroperationsComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(1);
  });
  it('Testing Form validation (for Insert House)', () => {
    const fixture = TestBed.createComponent(OwneroperationsComponent);
    const House = fixture.componentInstance;
    House.myform.controls?.['houseId'].setValue("8765");
    House.myform.controls?.['houseType'].setValue("2BHK");
    House.myform.controls?.['houseRent'].setValue("6521");
    House.myform.controls?.['houseAddress'].setValue("madurai");
    House.myform.controls?.['userId'].setValue("108");



    expect(House.myform.valid).toBeTruthy();;
  })

  it('Testing Form initial values', () => {
    const fixture = TestBed.createComponent(OwneroperationsComponent);
    const app = fixture.componentInstance;
    const loginFormGroup = app.myform;
    const loginFormValues = {

      houseId: '',
      houseType: '',
      houseRent: '',
      houseAddress: '',
      userId: ''

    }
    expect(loginFormGroup.value).toEqual(loginFormValues);
  });

});


describe('Update House Testing', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwneroperationsComponent],
      imports: [HttpClientModule, ReactiveFormsModule,
        AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, MatToolbarModule, MatButtonModule
        , MatTabsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDividerModule, BrowserAnimationsModule]
    }).compileComponents();
  });
  

  // beforeEach(() => TestBed.configureTestingModule({
  //   imports: [HttpClientTestingModule], 
  //   providers: [EmpserviceService]
  // }));

  it('House Component Test', () => {
    const fixture = TestBed.createComponent(OwneroperationsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

  });
  it('House Update Form GUI Input count', () => {
    const fixture = TestBed.createComponent(OwneroperationsComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(5);
  });
  it('House Update Form GUI Button count', () => {
    const fixture = TestBed.createComponent(OwneroperationsComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(1);
  });
  it('Testing Form validation (for Update House)', () => {
    const fixture = TestBed.createComponent(OwneroperationsComponent);
    const House = fixture.componentInstance;
    House.myform.controls?.['houseId'].setValue("8765");
    House.myform.controls?.['houseType'].setValue("2BHK");
    House.myform.controls?.['houseRent'].setValue("6521");
    House.myform.controls?.['houseAddress'].setValue("madurai");
    House.myform.controls?.['userId'].setValue("108");



    expect(House.myform.valid).toBeTruthy();;
  })

  it('Testing Form initial values(House)', () => {
    const fixture = TestBed.createComponent(OwneroperationsComponent);
    const app = fixture.componentInstance;
    const loginFormGroup = app.myform;
    const loginFormValues = {

      houseId: '',
      houseType: '',
      houseRent: '',
      houseAddress: '',
      userId: ''

    }
    expect(loginFormGroup.value).toEqual(loginFormValues);
  });

});


describe('Delete House Testing', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwneroperationsComponent],
      imports: [HttpClientModule, ReactiveFormsModule,
        AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, MatToolbarModule, MatButtonModule
        , MatTabsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDividerModule, BrowserAnimationsModule]
    }).compileComponents();
  });

  // beforeEach(() => TestBed.configureTestingModule({
  //   imports: [HttpClientTestingModule], 
  //   providers: [EmpserviceService]
  // }));

  it('App Component Test', () => {
    const fixture = TestBed.createComponent(OwneroperationsComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

  });


  it('Testing Form validation (for Delete)', () => {

    const fixture = TestBed.createComponent(OwneroperationsComponent);
    const House = fixture.componentInstance;
    House.myform.controls?.['houseId'].setValue("201");
    expect(House.myform.valid).toBeFalsy();;
  });



});




