import { Component, OnInit } from 'angular-ts-decorators';
import { Order } from '../model/order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-summary',
  template: require('./summary.component.html'),
  styles: [require('./summary.component.scss')]
})
export class SummaryComponent implements OnInit {
  public orders: Order[];
  public focusedOrderId: number;
  public orderItems

  /*@ngInject*/
  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  getOrders(): void {
    this.orderService.getAllOrders().then(orders => this.orders = orders);
  }

  toggleItemList(orderId: number) {
    if (orderId === this.focusedOrderId) {
      this.focusedOrderId = null;
    } else {
      this.focusedOrderId = orderId;
    }
  }
}
