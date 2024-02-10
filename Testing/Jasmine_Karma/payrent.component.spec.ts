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
import { PayrentComponent } from './payrent.component';

describe('PayRent Testing', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayrentComponent],
      imports: [HttpClientModule, ReactiveFormsModule,
        AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule, MatToolbarModule, MatButtonModule
        , MatTabsModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatIconModule, MatDividerModule, BrowserAnimationsModule,]
    }).compileComponents();
  });
  

  // beforeEach(() => TestBed.configureTestingModule({
  //   imports: [HttpClientTestingModule], 
  //   providers: [EmpserviceService]
  // }));

  it('PayRent Component Test', () => {
    const fixture = TestBed.createComponent(PayrentComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();

  });
  it('PayRent Form GUI Input count', () => {
    const fixture = TestBed.createComponent(PayrentComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("input");
    expect(inputElements.length).toEqual(6);
  });
  it('PayRent Form GUI Button count', () => {
    const fixture = TestBed.createComponent(PayrentComponent);
    fixture.detectChanges();
    const formElement = fixture.debugElement.nativeElement.querySelector("#myform");
    const inputElements = formElement.querySelectorAll("button");
    expect(inputElements.length).toEqual(1);
  });
  it('Testing Form validation (for PayRent)', () => {
    const fixture = TestBed.createComponent(PayrentComponent);
    const PayRent = fixture.componentInstance;
    PayRent.myform.controls?.['paymentId'].setValue("65");
    PayRent.myform.controls?.['rentAmount'].setValue("Its very neat");
    PayRent.myform.controls?.['rentStatus'].setValue("Not Paid");
    PayRent.myform.controls?.['dueAmount'].setValue("7643");
    PayRent.myform.controls?.['paidAmount'].setValue("7654");
    PayRent.myform.controls?.['userId'].setValue("102");
    PayRent.myform.controls?.['houseId'].setValue("201");




    expect(PayRent.myform.valid).toBeTruthy();;
  })

  it('Testing Form initial values(PayRent)', () => {
    const fixture = TestBed.createComponent(PayrentComponent);
    const app = fixture.componentInstance;
    const loginFormGroup = app.myform;
    const loginFormValues = {

      paymentId: '',
      rentAmount: '',
      rentStatus: '',
      dueAmount: '',
      paidAmount: '',
      userId: '',
      houseId:''

      

    }
    expect(loginFormGroup.value).toEqual(loginFormValues);
  });

});