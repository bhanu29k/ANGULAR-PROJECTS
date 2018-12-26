import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'We are learning CustomPipe';
  dob=new Date();
  amount=64539.45533;
  
}
