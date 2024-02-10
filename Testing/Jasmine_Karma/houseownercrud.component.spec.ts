import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
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
import { HouseownercrudComponent } from './houseownercrud.component';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';

describe('Insert HouseOwner Testing', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseownercrudComponent],
      imports: [HttpClientModule, ReactiveFormsModule,
        AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, MatToolbarModule, MatButtonModule
        , MatTabsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDividerModule, BrowserAnimationsModule]
    }).compileComponents();
  });
  

  // beforeEach(() => TestBed.configureTestingModule({
  //   imports: [HttpClientTestingModule], 
  //   providers: [EmpserviceService]
  // }));

  it('HouseOwner Component Test', () => {
    const fixture = TestBed.createComponent(HouseownercrudComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

  });
  it('HouseOwner Insert Form GUI Input count', () => {
    const fixture = TestBed.createComponent(HouseownercrudComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(5);
  });
  it('HouseOwner Insert Form GUI Button count', () => {
    const fixture = TestBed.createComponent(HouseownercrudComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(1);
  });
  it('Testing Form validation (for Insert HouseOwner)', () => {
    const fixture = TestBed.createComponent(HouseownercrudComponent);
    const User = fixture.componentInstance;
    User.myform.controls?.['userId'].setValue("1214");
    User.myform.controls?.['userName'].setValue("DomnicDev");
    User.myform.controls?.['userPassword'].setValue("Domnic@123");
    User.myform.controls?.['userEmail'].setValue("dom@gmail.com");
    User.myform.controls?.['userContact'].setValue("9837362");
    User.myform.controls?.['userType'].setValue("HouseOwner");



    expect(User.myform.valid).toBeTruthy();;
  })

  it('Testing Form initial values', () => {
    const fixture = TestBed.createComponent(HouseownercrudComponent);
    const app = fixture.componentInstance;
    const loginFormGroup = app.myform;
    const loginFormValues = {

      userId: '',
      userName: '',
      userPassword: '',
      userEmail: '',
      userContact: '',
      userType: ''

    }
    expect(loginFormGroup.value).toEqual(loginFormValues);
  });

});


describe('Update HouseOwner Testing', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseownercrudComponent],
      imports: [HttpClientModule, ReactiveFormsModule,
        AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, MatToolbarModule, MatButtonModule
        , MatTabsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDividerModule, BrowserAnimationsModule]
    }).compileComponents();
  });
  

  // beforeEach(() => TestBed.configureTestingModule({
  //   imports: [HttpClientTestingModule], 
  //   providers: [EmpserviceService]
  // }));

  it('HouseOwner Component Test', () => {
    const fixture = TestBed.createComponent(HouseownercrudComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

  });
  it('Update HouseOwner Form GUI Input count', () => {
    const fixture = TestBed.createComponent(HouseownercrudComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(5);
  });
  it('Update HouseOwner Form GUI Button count', () => {
    const fixture = TestBed.createComponent(HouseownercrudComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(1);
  });
  it('Testing Form validation (for Update HouseOwner)', () => {
    const fixture = TestBed.createComponent(HouseownercrudComponent);
    const User = fixture.componentInstance;
    User.myform.controls?.['userId'].setValue("1214");
    User.myform.controls?.['userName'].setValue("DomnicDev");
    User.myform.controls?.['userPassword'].setValue("Domnic@123");
    User.myform.controls?.['userEmail'].setValue("dom@gmail.com");
    User.myform.controls?.['userContact'].setValue("9837362");
    User.myform.controls?.['userType'].setValue("HouseOwner");



    expect(User.myform.valid).toBeTruthy();;
  })

  it('Testing Form initial values', () => {
    const fixture = TestBed.createComponent(HouseownercrudComponent);
    const app = fixture.componentInstance;
    const loginFormGroup = app.myform;
    const loginFormValues = {

      userId: '',
      userName: '',
      userPassword: '',
      userEmail: '',
      userContact: '',
      userType: ''

    }
    expect(loginFormGroup.value).toEqual(loginFormValues);
  });

});

describe('Delete HouseOwner Testing', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HouseownercrudComponent],
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
    const fixture = TestBed.createComponent(HouseownercrudComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

  });






  it('Testing Form validation (for Delete)', () => {

    const fixture = TestBed.createComponent(HouseownercrudComponent);
    const User = fixture.componentInstance;
    User.myform.controls?.['userId'].setValue("1212");
    expect(User.myform.valid).toBeFalsy();;
  });



});




