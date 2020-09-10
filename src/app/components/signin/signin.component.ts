import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  userSatus: string;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('isScubscribe')) {
      this.userSatus = 'You are login Successfully and News letter Subscrribed successfully';
    } else {
      this.userSatus = 'You are login Successfully';
    }
  }

}
