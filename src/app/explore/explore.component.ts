import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  ServicesData = [
    {
      iconClass : "fas fa-gem fa-5x",
      heading : "Sturdy Theme",
      description: "our themes are updated regularly to keep them buy free !"
    },
    {
      iconClass : "fas fa-laptop fa-5x",
      heading : "Up To Date",
      description: "All dependencies are kept zurrent to keep things fresh"
    },
    {
      iconClass : "fas fa-globe fa-5x",
      heading : "Ready To Publish",
      description: "You can use this design as is , or you can make changes  "
    },
    {
      iconClass : "fas fa-heart fa-5x",
      heading : "Made With Love",
      description: "is it really open source i it's nor made with love ?"
    }

  ];

  exploreData = [
   
    {
      img : "../../assets/images/01.jpg",
      title : "Explore"
    },

    {
      img : "../../assets/images/02.jpg",
      title : "Experience"
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
