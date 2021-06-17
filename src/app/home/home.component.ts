import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stories=[
    {
      title: "What to know about cancerous moles",
      desc: "",
      img: "assets/img/img.PNG",
      action: "READ MORE"
    },
    {
      title: "What is post-intensive care syndrome?",
      desc: "",
      img: "assets/img/img.PNG",
      action: "READ MORE"
    },
    {
      title: "Everything you need to know about Pap smears",
      desc: "",
      img: "assets/img/img.PNG",
      action: "READ MORE"
    },
    {
      title: "What to know about beta-blockers",
      desc: "",
      img: "assets/img/img.PNG",
      action: "READ MORE"
    },
    {
      title: "What to know about cancerous moles",
      desc: "",
      img: "assets/img/img.PNG",
      action: "READ MORE"
    },
    {
      title: "What is post-intensive care syndrome?",
      desc: "",
      img: "assets/img/img.PNG",
      action: "READ MORE"
    },
    {
      title: "Everything you need to know about Pap smears",
      desc: "",
      img: "assets/img/img.PNG",
      action: "READ MORE"
    },
    {
      title: "What to know about beta-blockers",
      desc: "",
      img: "assets/img/img.PNG",
      action: "READ MORE"
    },
    
  ]

  categories = [
    {
      title: "Nutrition",
      desc: "50 Posts",
      img: "assets/img/img.PNG",
      action: ""
    },
    {
      title: "Cancer / Oncology",
      desc: "200 Posts",
      img: "assets/img/img.PNG",
      action: ""
    },
    {
      title: "Anxiety / Stress",
      desc: "40 Posts",
      img: "assets/img/img.PNG",
      action: ""
    },
    {
      title: "Complementary Medicine",
      desc: "186 Posts",
      img: "assets/img/img.PNG",
      action: ""
    },
    {
      title: "Nutrition",
      desc: "50 Posts",
      img: "assets/img/img.PNG",
      action: ""
    },
    {
      title: "Cancer / Oncology",
      desc: "200 Posts",
      img: "assets/img/img.PNG",
      action: ""
    },
    {
      title: "Anxiety / Stress",
      desc: "40 Posts",
      img: "assets/img/img.PNG",
      action: ""
    },
    {
      title: "Complementary Medicine",
      desc: "186 Posts",
      img: "assets/img/img.PNG",
      action: ""
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
