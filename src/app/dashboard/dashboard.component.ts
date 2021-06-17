import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import "dhtmlx-scheduler";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  savedStories = [
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
