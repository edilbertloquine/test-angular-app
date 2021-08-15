import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Customer } from 'src/app/customers/customer.model';
import { CustomerService } from 'src/app/customers/customer.service';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.less']
})
export class HomeContactComponent implements OnInit {
  @ViewChild('joinForm', { static: true }) joinForm!: NgForm;
  testUserName: string = ''

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  onSubmit () {
    const { value } = this.joinForm
    const { firstName, lastName, username, email, tier, gender } = value;
    this.customerService.addCustomer(new Customer(firstName, lastName, username, email, tier, gender, new Date(Date.now())))
    this.joinForm.reset()
    this.router.navigate(['/customers']);
  }

}
