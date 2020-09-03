import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics = ["Angular", "React", "Vue"];

  userModel = new User ( '', 'rob@test.com', 1234567890, '', 'morning', true);
}
