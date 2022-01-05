import { NewsServiceService } from './../service/news-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private service:NewsServiceService) { }
  
  newsData:any=[];


  ngOnInit(): void {
    this.service.topNEWS().subscribe((data)=>{
    this.newsData=data.articles;
    })
  }

}
