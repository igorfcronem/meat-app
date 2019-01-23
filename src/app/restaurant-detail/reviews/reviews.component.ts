import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  
  reviews: Observable<any>
  
  constructor(private RestaurantsService: RestaurantsService,
    private route: ActivatedRoute) { }
    
    ngOnInit() {
      this.reviews = this.RestaurantsService
      .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
    }
    
  }
  