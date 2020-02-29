import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resto-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Input() search_term_f: string;
  @Input() address_f: string;
  @Output() sendInputedValue = new EventEmitter<any>();
  cartForm : FormGroup;
  
  constructor(fb: FormBuilder) {
    this.cartForm = fb.group({
      'search_term' : [null, Validators.required],
      'address' : [null, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changeRecord: SimpleChanges) {
    if ( changeRecord['search_term_f'] ){
      console.log('Nouvelle valeur du parent: '+this.search_term_f);
    }else if ( changeRecord['address_f'] ){
      console.log('Nouvelle valeur du parent: '+this.address_f);
    }
  }

  sendSearchTerm(form){
    console.log('Form Data: ');
    console.log(form);
    this.sendInputedValue.emit(form);
  }

}
