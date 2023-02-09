import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MyTel } from '../phone-number-input/phone-number-input.component';

@Component({
  selector: 'app-phone-form',
  templateUrl: './phone-form.component.html',
})
export class PhoneFormComponent {
  form: FormGroup = new FormGroup({
    tel: new FormControl(new MyTel('', '', '')),
  });

  @Output() public onPhoneChange = new EventEmitter<MyTel>();

  emitPhone() {
    if (this.form.value.tel !== null) {
      this.onPhoneChange.emit(this.form.value.tel)
    }
  }
}
