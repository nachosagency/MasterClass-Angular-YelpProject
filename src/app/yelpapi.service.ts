import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YelpapiService {
  //url_base: string = 'https://api.yelp.com/v3/businesses/search?';
  //bearer_token: string = 'uPFVvL6aObdtBJUs1uWBTaRgaDaOpOhuWQVcFj3zIo30oqMXPqOCv5XyIYsZkXkd2gWBuVRp8GVl0nVUAQ17RfoFEZkBHBuhT3BhJgMfOwxZM4owN8sUF_93rYJBXXYx';

  constructor(private http: HttpClient) { }

  getBusinesses(search_term, address): Observable<any>{
    /*let _url = this.url_base+'term='+search_term+'&location='+address+'';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.bearer_token
    });*/
    let _url = 'http://localhost:4200/assets/chinese+food+bordeaux.json';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get(_url, { headers: headers });
  }
}
