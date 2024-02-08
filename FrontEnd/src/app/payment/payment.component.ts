import { Component } from '@angular/core';
import { Payment } from '../model/Payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  payment: Payment;
  result: string = "";
  payList: Payment[] = [];
  npayList: Payment[] = [];

  constructor(private service: PaymentService) {
    this.payment = new Payment;
    this.getAllTenants();
    this.getNonPaidTenants();
  }
  register(data : any){

  }
  
  getAllTenants() {
    this.service.getAllPaymentStatus().subscribe(houses => this.payList = houses);

  }
  
  getNonPaidTenants() {
    this.service.getAllNonPaidPayment().subscribe(houses => this.npayList = houses);

  }
}
