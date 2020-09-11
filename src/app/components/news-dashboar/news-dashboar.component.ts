import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-dashboar',
  templateUrl: './news-dashboar.component.html',
  styleUrls: ['./news-dashboar.component.scss']
})
export class NewsDashboarComponent implements OnInit {
  invalidPassword = false;
  hide = true;
  signupForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(255),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phoneNo: new FormControl('', [
      Validators.required,
      Validators.maxLength(10),
      Validators.minLength(10),
    ]),
    password: new FormControl('Asdhjdkdjk%^%$%', [
      Validators.required,
      Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!%*?&#^])[A-Za-z\d$@$!%*?&].{8,}')
    ]),
    scubscribe: new FormControl(false)
  });
  isErrorMessage: any;
  constructor(
    private router: Router,
    private authService: AuthService ) { }

  ngOnInit() {
    localStorage.clear();
  }

  getrequired = (value) => {
    return this.signupForm.get(value);
  }

  userSignup = (userData) => {
    this.isErrorMessage = '';
    this.authService.signUp(userData).subscribe(data => {
      localStorage.setItem('isScubscribe', data['scubscribe']);
      this.router.navigateByUrl('/signin');
    }, error => {
      this.isErrorMessage = error.error.message;
    });
  }

}
