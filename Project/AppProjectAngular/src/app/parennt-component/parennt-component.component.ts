import { Component, OnInit } from '@angular/core';
import {Article} from 'D:/Angular5/Project/AppProjectAngular/src/app/article';
@Component({
  selector: 'app-parennt-component',
  templateUrl: './parennt-component.component.html',
  styleUrls: ['./parennt-component.component.css']
})
export class ParenntComponentComponent implements OnInit {
  article:Article[];
  constructor() 
  { 
    this.article=
    [
    new Article('Angular2','https://angular.io/',0),
    new Article('Java','https://www.w3schools.in/java-tutorial/intro/',0),
    new Article('C++','https://www.w3schools.in/cplusplus-tutorial/intro/',0),
    ];
  }

  ngOnInit() {
  }
  ClickFunc(title:HTMLInputElement,link:HTMLInputElement):boolean
{
  console.log(`Adding article title: ${title.value} and link: ${link.value}`); 
  this.article.push(new Article(title.value, link.value, 0)); 
  title.value = ''; 
  link.value = ''; 
  return false;
}
}

