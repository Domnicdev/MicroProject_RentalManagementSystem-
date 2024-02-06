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

import com.rms.bean.House;
import com.rms.repo.HouseRepo;

@Service
public class HouseService {
	@Autowired
	HouseRepo repo;
	
	public String addHouse(House house) {
		repo.save(house);
		return"Record Inserted";
		
	}
	
	public String updateHouse( House house) {
		repo.save(house);
		return"Record Updated";

	}
	
	public String deleteHouse(long houseId) {
		repo.deleteById(houseId);
		return "Record Deleted";
	}
	
	public House viewHouse(long houseId) {
		House house=repo.findById(houseId).get();
		return house;
	}
	public List<House> viewAllHouse(){
		Iterator<House> it=repo.findAll().iterator();
		 List<House> list=new ArrayList<House>();
	        while (it.hasNext()) {
	            list.add(it.next());
	        }
	        return list;
	}
}
