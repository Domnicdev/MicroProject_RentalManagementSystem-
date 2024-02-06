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

import com.rms.bean.User;
import com.rms.repo.UserRepo;

@Service
public class UserService {

	@Autowired
	UserRepo repo;
	
	public boolean addUser(User user) {
		repo.save(user);
		return true;
		
	}
	
	public String updateUser(User user) {
		repo.save(user);
		return"Record Updated";

	}
	
	public String deleteUser(long userId) {
		repo.deleteById(userId);
		return "Record Deleted";
	}
	
	public User viewUser(long userId) {
		User user=repo.findById(userId).get();
		return user;
	}
	public List<User> viewAllUsers(){
		Iterator<User> it=repo.findAll().iterator();
		 List<User> list=new ArrayList<User>();
	        while (it.hasNext()) {
	            list.add(it.next());
	        }
	        return list;
	}
	public List<User> viewAllTenants(){
		Iterator<User> it=repo.viewAllTenants().iterator();
		 List<User> list=new ArrayList<User>();
	        while (it.hasNext()) {
	            list.add(it.next());
	        }
	        return list;
	}
	
	public List<User> viewAllHouseOwners(){
		Iterator<User> it=repo.viewAllHouseOwners().iterator();
		 List<User> list=new ArrayList<User>();
	        while (it.hasNext()) {
	            list.add(it.next());
	        }
	        return list;
	}
}
