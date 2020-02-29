import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-resultzone',
  templateUrl: './resultzone.component.html',
  styleUrls: ['./resultzone.component.css']
})
export class ResultzoneComponent implements OnInit {
  @Input() yelp_business: any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.yelp_business);
  }

  ngOnChanges(changeRecord: SimpleChanges) {
    if ( changeRecord['yelp_business'] ){
      console.log(this.yelp_business);
    }
  }

}
