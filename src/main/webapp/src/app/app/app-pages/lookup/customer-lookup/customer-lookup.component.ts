import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'typings';

@Component({
  selector: 'app-customer-lookup',
  templateUrl: './customer-lookup.component.html',
  styleUrls: ['./customer-lookup.component.css']
})
export class CustomerLookupComponent implements OnInit {
  customerList$: Observable<User[]>;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.customerList$ = this.userService.getAllCustomers()
  }

}
