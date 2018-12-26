import { Component, OnInit, Input, HostBinding } from '@angular/core';
import {AppDetails} from 'D:/Angular5/Project/AppHomework/src/app/app-details';
@Component({
  selector: 'app-receiving',
  templateUrl: './receiving.component.html',
  styleUrls: ['./receiving.component.css']
})
export class ReceivingComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() AppDetail1:AppDetails;
  constructor() { 


  }
  UpVote()
  {
    this.AppDetail1.votes+=1;
  }
  DownVote()
  {
    this.AppDetail1.votes-=1;
  }

  ngOnInit() {
  }

}
