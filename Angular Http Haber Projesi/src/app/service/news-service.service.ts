import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http:HttpClient) { }

  newsApi="https://newsapi.org/v2/top-headlines?country=tr&apiKey=";

  sportsApi="https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=";

  teknoApi="https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=";

  genelApi="https://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey=";

  bilimApi="https://newsapi.org/v2/top-headlines?country=tr&category=science&apiKey="

  //api key kaldırdın...

  topNEWS():Observable<any>{
  return this.http.get(this.newsApi);

  }

  topSports():Observable<any>{
    return this.http.get(this.sportsApi);
  }

  topTekno():Observable<any>{
    return this.http.get(this.teknoApi);
  }

 topGenel():Observable<any>{
  return this.http.get(this.genelApi);
}

topBilim():Observable<any>{
  return this.http.get(this.bilimApi);
}



}
