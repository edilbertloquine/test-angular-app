import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.less']
})
export class CustomerListComponent implements OnInit {
  customers?: Customer[];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customers = this.customerService.getCustomers();
  }

}
