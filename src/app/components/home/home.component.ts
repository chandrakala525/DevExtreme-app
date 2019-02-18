import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  galleryImages = [
    "http://localhost:4200/assets/1.jpg",
    "http://localhost:4200/assets/2.jpg",
    "http://localhost:4200/assets/3.jpg",
    "http://localhost:4200/assets/4.jpg"
  ];

  Details = [{
    Id : 1,
    Name : "aaa",
    Designation : "Software Engineer",
    City : "abc",
    State : "pqr"
  },
  {
    Id : 2,
    Name : "bbb",
    Designation : "System Engineer",
    City : "xyz",
    State : "lmn"
  },
  {
    Id : 3,
    Name : "ccc",
    Designation : "Software Developer",
    City : "efg",
    State : "rst"
  }];

  ngOnInit() {
  }

}
