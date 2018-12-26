import { Component } from '@angular/core';
import {AppDetails} from 'D:/Angular5/Project/AppHomework/src/app/app-details';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  AppDetail:AppDetails[];
  constructor()
  {
    this.AppDetail=
    [
      new AppDetails("Dumbells","https://www.youtube.com/watch?v=y1r9toPQNkM",0),
      new AppDetails("Exercise Rods","https://www.moneycrashers.com/weighted-body-bar-exercises/",0),
      new AppDetails("Machine Exercise","https://greatist.com/move/best-gym-machines",0)
    ];
  }
onclic(title:HTMLInputElement,link:HTMLInputElement):boolean
{
  console.log(`Adding article title: ${title.value} and link: ${link.value}`); 
  this.AppDetail.push(new AppDetails(title.value, link.value, 0)); 
  title.value = ''; 
  link.value = ''; 
  return false;
}
}
