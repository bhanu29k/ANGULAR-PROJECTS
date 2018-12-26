import { Component, OnInit,HostBinding,Input } from '@angular/core';
import {Article} from 'D:/Angular5/Project/AppProjectAngular/src/app/article';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article1:Article;
  constructor() { 
    
  }

  ngOnInit() {
  }
  UpVote()
  {
    this.article1.votes +=1;
  }
  DownVote()
  {
    this.article1.votes-=1;
  }
}

