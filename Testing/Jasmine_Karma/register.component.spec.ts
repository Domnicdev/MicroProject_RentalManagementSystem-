import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';


import { RegisterComponent } from './register.component';


describe('Register Component Test', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatSnackBarModule,
      ],
      providers: [
       
      ],
    }).compileComponents();
  });


  it('Register Component Test', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const login = fixture.componentInstance;
    expect(login).toBeTruthy();
  });





  it('Register Form Input GUI count', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(5);
  });


  it('Register Form Button GUI count', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(1);
  });


  it('Testing Form initial values(for Register)', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const register = fixture.componentInstance;
    const registerFormGroup = register.myform;
    const registeFormValues = {
      userId: '',
      userName: '',
      userPassword: '',
      userEmail: '',
      userContact: '',
      userType: ''
    }
    expect(registerFormGroup.value).toEqual(registeFormValues);
  });


  it('Testing Form validation (for Register as Houseowner)', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const User = fixture.componentInstance;
    User.myform.controls?.['userId'].setValue("1214");
    User.myform.controls?.['userName'].setValue("DomnicDev");
    User.myform.controls?.['userPassword'].setValue("Domnic@123");
    User.myform.controls?.['userEmail'].setValue("dom@gmail.com");
    User.myform.controls?.['userContact'].setValue("9837362");
    User.myform.controls?.['userType'].setValue("HouseOwner");



    expect(User.myform.valid).toBeTruthy();;
  })
  it('Testing Form validation (for Register as Tenant)', () => {
    const fixture = TestBed.createComponent(RegisterComponent);
    const User = fixture.componentInstance;
    User.myform.controls?.['userId'].setValue("1214");
    User.myform.controls?.['userName'].setValue("DomnicDev");
    User.myform.controls?.['userPassword'].setValue("Domnic@123");
    User.myform.controls?.['userEmail'].setValue("dom@gmail.com");
    User.myform.controls?.['userContact'].setValue("9837362");
    User.myform.controls?.['userType'].setValue("Tenant");



    expect(User.myform.valid).toBeTruthy();;
  })
});
