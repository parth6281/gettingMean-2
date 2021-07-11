import { Component, OnInit, Input } from '@angular/core';
import { Location, Review } from '../location';
import { Loc8rDataService } from '../loc8r-data.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  public newReview = {
    author: '',
    rating: 5,
    reviewText: ''
  };

  public formVisible: boolean = false;

  public formError: string = '';

  private formIsValid(): boolean {
    if(this.newReview.author && this.newReview.rating && this.newReview.reviewText) {
      return true;
    } else {
      return false;
    }
  }

  public onReviewSubmit(): void {
    this.formError = '';

    if(this.formIsValid())  {
      this.loc8rDataService.doReviewByLocationId(this.location._id, this.newReview)
      .then((review: Review) => {
        console.log(`review saved`, review);
        let reviews = this.location.reviews.slice(0);
        reviews.unshift(review);
        this.location.reviews = reviews;
        this.resetAndHideReviewForm();
      })
    } else {
      this.formError = 'All fields required, please try again';
    }
  }

  private resetAndHideReviewForm(): void {
    this.formVisible = false;
    this.newReview.author = '';
    this.newReview.rating = 5;
    this.newReview.reviewText = '';
  }

  @Input() location: Location;

  constructor(private loc8rDataService: Loc8rDataService) { }

  ngOnInit(): void {
  }

}
