import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  userSatus: string;
  isScubscribe = localStorage.getItem('isScubscribe');

  constructor() { }

  ngOnInit() {
    console.log(this.isScubscribe);
    setTimeout( () => {
      if (this.isScubscribe) {
        this.userSatus = 'You are login Successfully and News letter Subscrribed successfully';
      } else {
        this.userSatus = 'You are login Successfully';
      }
    }, 1000);
  }

}
