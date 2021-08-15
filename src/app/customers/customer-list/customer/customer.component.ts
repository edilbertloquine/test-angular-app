import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Customer } from '../../customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.less']
})
export class CustomerComponent implements OnInit {
  @ViewChild('template', { static: true }) template;

  @Input() customer!: Customer
  @Input() index!: number;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.viewContainerRef.createEmbeddedView(this.template);
  }

}
