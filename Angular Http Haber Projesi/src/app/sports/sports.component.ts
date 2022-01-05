import { NewsServiceService } from './../service/news-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  constructor(private service:NewsServiceService) { }

  sporData:any=[];

  ngOnInit(): void {
    this.service.topSports().subscribe((data)=>{
      console.log(data)
        this.sporData=data.articles;
    })
  }

}
