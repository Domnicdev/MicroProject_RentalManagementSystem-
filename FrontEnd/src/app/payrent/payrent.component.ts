import { Component } from '@angular/core';
import { Payment } from '../model/Payment';
import { PaymentService } from '../payment.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payrent',
  templateUrl: './payrent.component.html',
  styleUrls: ['./payrent.component.css']
})
export class PayrentComponent {
  payment: Payment;
  result: string = "";
  payList: Payment[] = [];
  npayList: Payment[] = [];
  myform:FormGroup;

  constructor(private service: PaymentService) {
    this.payment = new Payment;
    this.getAllTenants();
    this.myform=new FormGroup({
      paymentId:new FormControl('',[Validators.required]),
      rentAmount:new FormControl('',[Validators.required]),
      rentStatus:new FormControl('',[Validators.required]),
      dueAmount:new FormControl('',[Validators.required]),
      paidAmount:new FormControl('',[Validators.required]),
      userId:new FormControl('',[Validators.required]),
      houseId:new FormControl('',[Validators.required])

    })

  }
  register(data : any){

  }

  updateRentPayment(data:any){
    this.payment.paymentId=data.paymentId;
    this.payment.rentAmount=data.rentAmount;
    this.payment.rentStatus=data.rentStatus;
    this.payment.dueAmount=data.dueAmount;
    this.payment.paidAmount=data.paidAmount;
    this.payment.userId=data.userId;
    this.payment.houseId=data.houseId;

  
  
    this.result=this.service.updateRentPayment(this.payment);
  
    
    }

  getAllTenants() {
    this.service.getAllStatus().subscribe(status => this.payList = status);

  }

}
