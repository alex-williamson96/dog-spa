import { Component, Input } from '@angular/core';
import {
  ControlContainer,
  NgForm,
} from '@angular/forms';
import { MyTel } from '../phone-number-input/phone-number-input.component';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
  styleUrls: ['./phone-form.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class PhoneFormComponent {
  @Input('phoneNumberPretext') phoneNumberPretext = 'Phone Number';
  @Input('formName') formName = 'phoneNumber';
  @Input('phoneNumber') parentPhoneNumber = '';
  prevPhone = '';

  handlePhoneNumberChange(phone) {
    if (phone.length == 3) {
      this.parentPhoneNumber = this.parentPhoneNumber + '-';
    }

    if (phone.length == 7) {
      this.parentPhoneNumber = this.parentPhoneNumber + '-';
    }

    if (phone[phone.length -1] == '-') {
      this.parentPhoneNumber = this.parentPhoneNumber.slice(0, -1);
    }

    if (phone === this.prevPhone) {
      this.parentPhoneNumber = this.parentPhoneNumber.slice(0, -1);
    }

    if (phone.length === 4 && phone[phone.length -1] !== '-') {
      this.parentPhoneNumber = this.parentPhoneNumber.slice(0,3) + '-' + this.parentPhoneNumber.slice(3);
    }

    if (phone.length === 8 && phone[phone.length -1] !== '-') {
      this.parentPhoneNumber = this.parentPhoneNumber.slice(0,7) + '-' + this.parentPhoneNumber.slice(7);
    }

    this.prevPhone = phone;
  }

  isNumber(char) {
    return /^\d$/.test(char);
  }
}
