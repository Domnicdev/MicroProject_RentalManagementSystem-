package com.rms.repo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rms.bean.Review;
@Repository
public interface ReviewRepo extends CrudRepository<Review, Long> {

}
