import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'typings';

@Component({
  selector: 'app-customer-overview-page',
  templateUrl: './customer-overview-page.component.html',
  styleUrls: ['./customer-overview-page.component.css']
})
export class CustomerOverviewPageComponent implements OnInit {
  id: string;
  customer$: Observable<User>;

  constructor(private customerService: CustomerService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('customerId');

    this.customer$ = this.customerService.getCustomerInfo(this.id);
  }
}
