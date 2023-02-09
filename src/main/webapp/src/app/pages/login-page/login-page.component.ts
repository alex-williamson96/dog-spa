import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/security/auth.service';
import { StorageService } from '../../services/security/storage.service';
import { User } from '../../../../typeings.d';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  hidePassword = true;
  register = false;
  isLoggedIn = false;
  isLoggedInFailed = false;
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService) {
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  onSubmit(user) {
    this.authService.login(user.username, user.password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoggedInFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        console.log('hi')
        window.location.reload();
      },
      error: err => {
        console.log(err);
        this.isLoggedInFailed = true;
      }
    })
  }

}
