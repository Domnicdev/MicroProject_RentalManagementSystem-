package com.rms.controller;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.rms.bean.Payment;
import com.rms.bean.Review;
import com.rms.bean.User;
import com.rms.repo.PaymentRepo;
import com.rms.service.PaymentService;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class PaymentController {

	@Autowired
	PaymentService service;

	@PostMapping("PerformPaymentInsert")
	public String performInsert(@RequestBody Payment payment) {
		service.addPayment(payment);
		return "Record Inserted";

	}

//	@GetMapping("PerformViewPaymentStatus/{paymentId}")
//	public Payment performView(@PathVariable("paymentId") long paymentId) {
//		Payment payment=repo.findById(paymentId).get();
//		return payment;
//	}
//	
	@GetMapping("ViewAllPaidTenants")
	public List<Payment> viewAllPaidTenants() {
		Iterator<Payment> it = service.viewAllPaidTenants().iterator();
		List<Payment> list = new ArrayList<Payment>();
		while (it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}

	@GetMapping("ViewAllNotPaidTenants")
	public List<Payment> viewAllNonPaidTenants() {
		Iterator<Payment> it = service.viewAllNonPaidTenants().iterator();
		List<Payment> list = new ArrayList<Payment>();
		while (it.hasNext()) {
			list.add(it.next());
		}
		return list;
	}
	
	@GetMapping("ViewNotPaidTenantDetails")
	public List<Payment> viewNonPaidTenantDetails() {
		List<Payment> list = service.viewNonPaidTenantDetails();
	
		return list;
	}
	
	

}
