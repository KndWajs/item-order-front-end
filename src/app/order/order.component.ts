import { Component, OnInit } from 'angular-ts-decorators';
import { Order } from '../order';

@Component({
  selector: 'app-order',
  template: require('./order.component.html'),
  styles: [require('./order.component.scss')]
})
export class OrderComponent implements OnInit {
  order: Order;

  /*@ngInject*/
  constructor() { }

  ngOnInit() {
  }

  update(order: Order): void {
    console.log('update');
    console.log(order);
  }
}
