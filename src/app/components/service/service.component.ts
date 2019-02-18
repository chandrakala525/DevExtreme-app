import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  constructor() { }

  dataList = ["List Item 1", 
  "List Item 2", 
  "List Item 3", 
  "List Item 4", 
  "List Item 5"];

  ngOnInit() {
  }

}
