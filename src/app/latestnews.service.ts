import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LatestnewsService {

  constructor(public httpClient : HttpClient) { }
  getEgyptNews() : Observable<any>{
      return this.httpClient.get("https://newsapi.org/v2/top-headlines?country=eg&category=business&apiKey=6d27a64850964c0d927652ef4c379ab5");
  }
}
