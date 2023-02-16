import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/security/auth.service';
import { MyTel } from './phone-number-input/phone-number-input.component';
import { User } from '../../../../../typings';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  hidePassword = true;
  phoneNumber: MyTel;
  isSuccessful = false;
  isSignUpFailed = false;

  constructor(private authService: AuthService) {
  }

  onPhoneNumberChange(value: MyTel) {
    console.log(value)
    this.phoneNumber = value;
  }

  onSubmit(user: User) {
    user.phoneNumber = this.phoneNumber.toString();
    user.roles = null;
    user.stringRoles = null;

    console.log(user);

    this.authService.register(user).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        console.log(err);
        this.isSignUpFailed = true;
      }
    })
  }

}
