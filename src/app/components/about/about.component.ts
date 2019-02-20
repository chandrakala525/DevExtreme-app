import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  text='test';
  tabs = [{
    id : 1,
    text : "Tab 1",
    content : "Tab 1 content. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id : 2,
    text : "Tab 2",
    content : "Tab 2 Content. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  },
  {
    id : 3,
    text : "Tab 3",
    content : "Tab 3 Content. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  }];

  visible : boolean;
  popupVisible : any;
  private textValue : string;
  tabContent: string;

  constructor() { 
    this.visible = false;
    this.tabContent = this.tabs[0].content;
  }

  togglePopover(){
    this.visible = !this.visible;
  }

  showText(){
    this.popupVisible = true;
  }

  changeText(value){
    this.textValue = value;
    this.popupVisible = false;
  }

  selectTab(e) {
    this.tabContent = this.tabs[e.itemIndex].content;
}

  ngOnInit() {
  }

}
