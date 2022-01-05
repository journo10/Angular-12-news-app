import { NewsServiceService } from './../service/news-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-healt-saglik',
  templateUrl: './healt-saglik.component.html',
  styleUrls: ['./healt-saglik.component.css']
})
export class HealtSaglikComponent implements OnInit {

  constructor(private service:NewsServiceService) { }

  genelData:any=[];


  ngOnInit(): void {
    this.service.topGenel().subscribe((data)=>{
      console.log(data)
      this.genelData=data.articles;
    })
  }

}
