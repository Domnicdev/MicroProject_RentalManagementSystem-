import { Component } from '@angular/core';
import { Review } from '../model/Review';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  review:Review;
  result:string="";
  reviewList: Review[] = [];
 
  myform:FormGroup;
  constructor(private service:ReviewService){
    this.review=new Review;
    this.myform=new FormGroup({
      reviewId:new FormControl('',[Validators.required]),
      userReview:new FormControl('',[Validators.required]),
      houseId:new FormControl('',[Validators.required])
      

    })
  }

  register(data : any){
  
  }
  insertReview(data:any){
    this.review.reviewId=data.reviewId;
  this.review.userReview=data.userReview;
  this.review.houseId=data.houseId;

  this.result=this.service.insertReview(this.review);
 
  }
}
