import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AppendCompanyPipe } from './customer-list/customer/append-company.pipe';
import { CustomerComponent } from './customer-list/customer/customer.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerListComponent,
    CustomerComponent,
    AppendCompanyPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    CustomersRoutingModule
  ]
})

export class CustomersModule {}
