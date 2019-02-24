import { Component, OnInit  , Input,  EventEmitter, Output} from '@angular/core';
import { AboutComponent } from '../about.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
  
})
export class PopupComponent implements OnInit {
  @Input() popupVisible : any;
  @Input() textValue : any;
  @Output() public myOutput = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
    this.textValue = this.textValue;
  }
  
  changeText(changeText){
    this.myOutput.emit(changeText);
  }
}
