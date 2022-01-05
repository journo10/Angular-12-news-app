import { NewsServiceService } from './../service/news-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bilim',
  templateUrl: './bilim.component.html',
  styleUrls: ['./bilim.component.css']
})
export class BilimComponent implements OnInit {

  constructor(private service:NewsServiceService) { }

  teknoBilim:any=[];

  ngOnInit(): void {
    this.service.topBilim().subscribe((data)=>{
      console.log(data)
      this.teknoBilim=data.articles
    })
  }

}
