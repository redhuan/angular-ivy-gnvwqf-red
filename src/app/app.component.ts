import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  members: string[] = [];
  newMember = '';

  addMember() {
    if (!!this.newMember) {
      this.members.push(this.newMember);
      this.newMember = '';
      console.log(this.members);
    } else {
      console.log('cannot add empty name');
    }
  }
  onInput(member: string) {
    this.newMember = member;
    console.log(this.newMember);
  }
  delete() {
    this.members = [];
    console.log(this.members);
  }
}