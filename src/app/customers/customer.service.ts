import { Injectable } from "@angular/core";
import { Customer } from "./customer.model";

@Injectable()
export class CustomerService {
  private customers: Customer[] = [
    new Customer(
      'John',
      'Doe',
      'johndoe',
      'johndoe@test.com',
      '1',
      'male',
      new Date(2018, 3, 16)
    ),
    new Customer(
      'Jane',
      'Doe',
      'janedoe',
      'janedoe@test.com',
      '2',
      'female',
      new Date(2019, 8, 21)
    ),
    new Customer(
      'Peter',
      'Parker',
      'spiderman',
      'spiderman@test.com',
      '1',
      'male',
      new Date(2020, 12, 1)
    )
  ]

  constructor () {}

  getCustomer (): Customer {
    return this.customers[this.customers.length - 1]
  }

  getCustomers (){
    return this.customers.slice(0, -1)
  }

  addCustomer (customer: Customer) {
    this.customers.push(customer)
  }
}
