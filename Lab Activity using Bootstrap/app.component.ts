import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true
}) 
export class AppComponent {
  title = 'data-binding';
  clientName = "Jon";
  appliedCSS = "green";
  notAppliedCSS = false;
  myColor = "red";

  clickCount=0;
  clickMe() {
    this.clickCount++;
  
  }
  
  showData($event: any) {
    console.log('Button is clicked');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}