import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topicHasError = true;
  topics = ["Angular", "React", "Vue"];

  userModel = new User ( "Rob", "rob@test.com", 1234567890, 'default', 'evening', true);

  validateTopic(value) {
    if (value === 'default'){
    this.topicHasError=true;
    } else {
      this.topicHasError = false;
    }
  }
}
