import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserData } from '../user-data';

@Component({
  selector: 'app-user-interface',
  imports: [FormsModule],
  templateUrl: './user-interface.html',
  styleUrl: './user-interface.css',
})
export class UserInterface {
  model = new UserData("Enter data");
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
}
