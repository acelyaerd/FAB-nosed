import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.scss']
})
export class HorizontalListComponent implements OnInit {

  @Input() elements: any;
  @Input() title: string;
  constructor() { }

  ngOnInit(): void {
  }

}
