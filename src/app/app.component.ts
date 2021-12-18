import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Scalio | Angular Test';

  resultItems = [];

  showResults(value: any) {
    this.resultItems = value;

  }
}
