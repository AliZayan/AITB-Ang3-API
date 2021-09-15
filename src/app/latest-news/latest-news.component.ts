import { Component, OnInit } from '@angular/core';
import { LatestnewsService } from '../latestnews.service';
@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  news :any= [];
  constructor(public latestNews : LatestnewsService) { }

  ngOnInit(): void {
    this.latestNews.getEgyptNews().subscribe((data)=>{
      this.news = data.articles;
      //console.log(this.news);
    })
  }

}
