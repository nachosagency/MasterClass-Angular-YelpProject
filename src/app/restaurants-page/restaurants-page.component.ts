import { Component, OnInit } from '@angular/core';

import { YelpapiService } from '../yelpapi.service';


@Component({
  selector: 'app-restaurants-page',
  templateUrl: './restaurants-page.component.html',
  styleUrls: ['./restaurants-page.component.css']
})
export class RestaurantsPageComponent implements OnInit {
  search_term_f: string = "Sushis";
  address_f: string = "16 rue Huguerie - 33000 Bordeaux";
  yelp_business: any;

  constructor(private yelpapi: YelpapiService) { }

  ngOnInit(): void {
  }

  receiveNewForm(form){
    this.yelpapi.getBusinesses(form.search_term, form.address).subscribe(obj => {
      this.yelp_business = obj;
    });
  }

}
