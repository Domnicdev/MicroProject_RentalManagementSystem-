package com.rms.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.rms.bean.Address;
import com.rms.repo.AddressRepo;

@Service
public class AddressService {

	@Autowired
	AddressRepo repo;
	
	public boolean addAddress(Address address) {
		repo.save(address);
		return true;
		
	}
	
	public boolean updateAddress(Address address) {
		repo.save(address);
		return true;

	}
	
	public String deleteAddress(long addressId) {
		repo.deleteById(addressId);
		return "Record Deleted";
	}
	
	
	public Address viewAddress(long addressId) {
		Address user=repo.findById(addressId).get();
		return user;
	}
	public List<Address> viewAllAddress(){
		Iterator<Address> it=repo.findAll().iterator();
		 List<Address> list=new ArrayList<Address>();
	        while (it.hasNext()) {
	            list.add(it.next());
	        }
	        return list;
	}
	
}
