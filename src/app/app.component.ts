import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
    galleryImages=["http://localhost:4200/assets/1.jpg",
                   "http://localhost:4200/assets/2.jpg",
                   "http://localhost:4200/assets/3.jpg",
                   "http://localhost:4200/assets/4.jpg"];

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

    dataList = ["List Item 1", 
                "List Item 2", 
                "List Item 3", 
                "List Item 4", 
                "List Item 5"];


    tabs = [{
      title : "Tab 1",
      text : "Tab1 content. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title : "Tab 2",
      text : "Tab 2 Content. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      title : "Tab 3",
      text : "Tab 3 Content. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }];

    visible : boolean;
    popupVisible : any;
    tabContent : any;


  constructor() {
    this.visible = false;
    
  }

  togglePopover(){
    this.visible = !this.visible;
  }

  showInfo(){
    this.popupVisible = true;
  }

}