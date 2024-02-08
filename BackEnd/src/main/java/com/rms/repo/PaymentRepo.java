package com.rms.repo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.rms.bean.Payment;
import com.rms.bean.User;

public interface PaymentRepo extends CrudRepository<Payment, Long> {

	@Query(value = "select * from tbl_payment where due_amount=0", nativeQuery = true)
	List<Payment> viewAllPaidTenants();

	@Query(value = "select * from tbl_payment where due_amount>0", nativeQuery = true)
	List<Payment> viewAllNonPaidTenants();

	
}
