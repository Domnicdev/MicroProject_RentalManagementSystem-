package com.rms.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.rms.bean.Payment;
import com.rms.repo.PaymentRepo;

@Service
public class PaymentService {

	@Autowired
	PaymentRepo repo;

	public String addPayment( Payment payment) {
		repo.save(payment);
		return"Record Inserted";
		
	}
	

	public List<Payment> viewAllPaidTenants(){
		Iterator<Payment> it=repo.viewAllPaidTenants().iterator();
		 List<Payment> list=new ArrayList<Payment>();
	        while (it.hasNext()) {
	            list.add(it.next());
	        }
	        return list;
	}
	
	public List<Payment> viewAllNonPaidTenants(){
		Iterator<Payment> it=repo.viewAllNonPaidTenants().iterator();
		 List<Payment> list=new ArrayList<Payment>();
	        while (it.hasNext()) {
	            list.add(it.next());
	        }
	        return list;
	}
	
	public List<Payment> viewNonPaidTenantDetails(){
		Iterator<Payment> it=repo.viewNonPaidTenantDetail().iterator();
		 List<Payment> list=new ArrayList<Payment>();
	        while (it.hasNext()) {
	            list.add(it.next());
	        }
	        return list;
	}

	
}
