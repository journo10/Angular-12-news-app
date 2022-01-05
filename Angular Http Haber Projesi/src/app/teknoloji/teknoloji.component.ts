import { NewsServiceService } from './../service/news-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teknoloji',
  templateUrl: './teknoloji.component.html',
  styleUrls: ['./teknoloji.component.css']
})
export class TeknolojiComponent implements OnInit {

  constructor(private service:NewsServiceService) { }

  teknoData:any=[];

  ngOnInit(): void {

    this.service.topTekno().subscribe((data)=>{
      console.log(data)
      this.teknoData=data.articles;
    })
  }

}
