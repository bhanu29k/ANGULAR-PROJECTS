import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  enames:string[];
  constructor() {

    this.enames=['bhanu','khandelwal','govind','rawat'];
   }

  ngOnInit() {
  }

}
