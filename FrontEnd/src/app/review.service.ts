import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from './model/Review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private url: string = "http://localhost:7070";

  constructor(private http:HttpClient) { }

  insertReview(review: Review) {
    this.http.post(this.url + "/PerformReviewInsert", review).subscribe();
    return "Record Inserted";
  }
  viewAllReviews(){
    return this.http.get<Review[]>(this.url+"/ViewAllReviews");
    
  }
}
