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

import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';
import { TenantcrudComponent } from './tenantcrud.component';

describe('Insert Tenant Testing', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenantcrudComponent],
      imports: [HttpClientModule, ReactiveFormsModule,
        AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, MatToolbarModule, MatButtonModule
        , MatTabsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDividerModule, BrowserAnimationsModule]
    }).compileComponents();
  });
  

  // beforeEach(() => TestBed.configureTestingModule({
  //   imports: [HttpClientTestingModule], 
  //   providers: [EmpserviceService]
  // }));

  it('Tenant Component Test', () => {
    const fixture = TestBed.createComponent(TenantcrudComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

  });
  it('Tenant Insert Form GUI Input count', () => {
    const fixture = TestBed.createComponent(TenantcrudComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(5);
  });
  it('Tenant Insert Form GUI Button count', () => {
    const fixture = TestBed.createComponent(TenantcrudComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(1);
  });
  it('Testing Form validation (for Insert Tenant)', () => {
    const fixture = TestBed.createComponent(TenantcrudComponent);
    const House = fixture.componentInstance;
    House.myform.controls?.['userId'].setValue("1215");
    House.myform.controls?.['userName'].setValue("DomnicDev");
    House.myform.controls?.['userPassword'].setValue("Domnic@123");
    House.myform.controls?.['userEmail'].setValue("dom@gmail.com");
    House.myform.controls?.['userContact'].setValue("9837362");
    House.myform.controls?.['userType'].setValue("Tenant");



    expect(House.myform.valid).toBeTruthy();;
  })

  it('Testing Form initial values', () => {
    const fixture = TestBed.createComponent(TenantcrudComponent);
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


describe('Update Tenant Testing', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenantcrudComponent],
      imports: [HttpClientModule, ReactiveFormsModule,
        AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, MatToolbarModule, MatButtonModule
        , MatTabsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDividerModule, BrowserAnimationsModule]
    }).compileComponents();
  });
  

  // beforeEach(() => TestBed.configureTestingModule({
  //   imports: [HttpClientTestingModule], 
  //   providers: [EmpserviceService]
  // }));

  it('Tenant Component Test', () => {
    const fixture = TestBed.createComponent(TenantcrudComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

  });
  it('Update Tenant Form GUI Input count', () => {
    const fixture = TestBed.createComponent(TenantcrudComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(5);
  });
  it('Update Tenant Form GUI Button count', () => {
    const fixture = TestBed.createComponent(TenantcrudComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(1);
  });
  it('Testing Form validation (for Update Tenant)', () => {
    const fixture = TestBed.createComponent(TenantcrudComponent);
    const House = fixture.componentInstance;
    House.myform.controls?.['userId'].setValue("1214");
    House.myform.controls?.['userName'].setValue("DomnicDev");
    House.myform.controls?.['userPassword'].setValue("Domnic@123");
    House.myform.controls?.['userEmail'].setValue("dom@gmail.com");
    House.myform.controls?.['userContact'].setValue("9837362");
    House.myform.controls?.['userType'].setValue("HouseOwner");



    expect(House.myform.valid).toBeTruthy();;
  })

  it('Testing Form initial values', () => {
    const fixture = TestBed.createComponent(TenantcrudComponent);
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

describe('Delete Tenant Testing', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TenantcrudComponent],
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
    const fixture = TestBed.createComponent(TenantcrudComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

  });






  it('Testing Form validation (for Delete)', () => {

    const fixture = TestBed.createComponent(TenantcrudComponent);
    const House = fixture.componentInstance;
    House.myform.controls?.['userId'].setValue("1212");
    expect(House.myform.valid).toBeFalsy();;
  });



});




