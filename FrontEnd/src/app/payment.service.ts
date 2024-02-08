import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from './model/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private url: string = "http://localhost:7070";

  constructor(private http:HttpClient) { }

  getAllStatus(){
    return this.http.get<Payment[]>(this.url+"/ViewAllStatus");
    
  }
  updateRentPayment(pr: Payment) {
    this.http.put(this.url + "/PerformPaymentUpdate", pr).subscribe();
    return "Record Updated";
  }
  getAllPaymentStatus(){
    return this.http.get<Payment[]>(this.url+"/ViewAllPaidTenants");
    
  }
  getAllNonPaidPayment(){
    return this.http.get<Payment[]>(this.url+"/ViewAllNotPaidTenants");
    
  }
}
