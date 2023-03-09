import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { User } from 'typings';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css'],
})
export class CustomerTableComponent implements OnInit {
  @Input('customerList') customerList: User[];
  dataSource: MatTableDataSource<User, MatTableDataSourcePaginator>;
  displayedColumns = ['firstName', 'lastName', 'email', 'phoneNumber', 'dogs'];


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.customerList);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
