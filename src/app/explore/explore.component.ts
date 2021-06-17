import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.scss']
})


export class ExploreComponent implements OnInit {

  elements = [
    {
      title: "Nutrition",
      desc: "",
      img: "assets/img/img.PNG",
      action: "VIEW POSTS"
    },
    {
      title: "Mindfulness",
      desc: "",
      img: "assets/img/img.PNG",
      action: "VIEW POSTS"
    },
    {
      title: "Recipes",
      desc: "",
      img: "assets/img/img.PNG",
      action: "VIEW POSTS"
    },
    {
      title: "Treatments",
      desc: "",
      img: "assets/img/img.PNG",
      action: "VIEW POSTS"
    },
    {
      title: "Nutrition",
      desc: "",
      img: "assets/img/img.PNG",
      action: "VIEW POSTS"
    },
    {
      title: "Mindfulness",
      desc: "",
      img: "assets/img/img.PNG",
      action: "VIEW POSTS"
    },
    {
      title: "Recipes",
      desc: "",
      img: "assets/img/img.PNG",
      action: "VIEW POSTS"
    },
    {
      title: "Treatments",
      desc: "",
      img: "assets/img/img.PNG",
      action: "VIEW POSTS"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
