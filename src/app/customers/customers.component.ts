import { Component, OnInit } from '@angular/core';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.less']
})
export class CustomersComponent implements OnInit {
  customer!: Customer

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customer = this.customerService.getCustomer()
  }

}
