package com.rms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.rms.bean.Review;
import com.rms.repo.ReviewRepo;

@Service
public class ReviewService {

	@Autowired
	ReviewRepo repo;
	
	public boolean addReview(Review review) {
		repo.save(review);
		return true;
		
	}
	
	public boolean deleteReview(long reviewId) {
		repo.deleteById(reviewId);
		return true;

	}

	public Review viewReview(long reviewId) {
		Review review = repo.findById(reviewId).get();
		return review;
		
	}
	
}
