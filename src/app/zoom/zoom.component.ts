import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {

  profiles = [
    {
      name: "John Smith",
      img: "assets/img/profile_picture.png"
    },
    {
      name: "Williams Brown",
      img: "assets/img/profile_picture.png"
    },
    {
      name: "Garcia Miller",
      img: "assets/img/profile_picture.png"
    },
    {
      name: "Thomas Anderson",
      img: "assets/img/profile_picture.png"
    },
    {
      name: "Hernandez Lopez",
      img: "assets/img/profile_picture.png"
    },
    {
      name: "Taylor Moore",
      img: "assets/img/profile_picture.png"
    },
  ]

  arranged = [
    {
      name: "John Smith",
      img: "assets/img/profile_picture.png"
    },
    {
      name: "Williams Brown",
      img: "assets/img/profile_picture.png"
    },
    {
      name: "Garcia Miller",
      img: "assets/img/profile_picture.png"
    },
    {
      name: "Thomas Anderson",
      img: "assets/img/profile_picture.png"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
