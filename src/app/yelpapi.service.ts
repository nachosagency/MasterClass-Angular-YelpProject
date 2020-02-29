import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YelpapiService {

  constructor(private http: HttpClient) { }

  getBusinesses(search_term, address): Observable<any>{
    return this.http.get('http://localhost:4200/assets/chinese+food+bordeaux.json');
  }
}
