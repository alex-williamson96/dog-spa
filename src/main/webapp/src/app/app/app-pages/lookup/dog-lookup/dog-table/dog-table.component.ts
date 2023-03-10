import { Component, Input } from '@angular/core';
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table';
import { User } from 'typings';

@Component({
  selector: 'app-dog-table',
  templateUrl: './dog-table.component.html',
  styleUrls: ['./dog-table.component.css']
})
export class DogTableComponent {
  @Input('customerList') customerList: User[];
  dataSource: MatTableDataSource<User, MatTableDataSourcePaginator>;
  displayedColumns = ['name', 'breed', 'user'];


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.customerList);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
