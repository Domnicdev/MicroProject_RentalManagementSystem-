import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PayRent } from './model/PayRent';

@Injectable({
  providedIn: 'root'
})
export class PayrentService {

  private url: string = "http://localhost:7070";

  constructor(private http:HttpClient) { }

  insertRentPayment(pr: PayRent) {
    this.http.post(this.url + "/PerformRentPaymentInsert", pr).subscribe();
    return "Record Inserted";
  }
  updateRentPayment(pr: PayRent) {
    this.http.put(this.url + "/PerformPaymentUpdate", pr).subscribe();
    return "Record Updated";
  }

  getAllRentPayments(){
    return this.http.get<PayRent[]>(this.url+"/ViewAllRentPayment");
    
  }
}
