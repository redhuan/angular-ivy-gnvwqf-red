import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  member: string[] = [];
  newMember = '';
  out() {
    console.log('here');
  }
  addMember() {
    this.member.push(this.newMember);
    console.log(this.member);
  }
  onInput(member:string){
    this.newMember = member;
  }
}
//this test
