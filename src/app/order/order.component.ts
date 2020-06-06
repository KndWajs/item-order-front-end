import { Component, OnInit } from 'angular-ts-decorators';
import { Item } from '../model/item';
import { ItemColor } from '../model/item-color';
import { ItemSize } from '../model/item-size';
import { Order } from '../model/order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  template: require('./order.component.html'),
  styles: [require('./order.component.scss')]
})
export class OrderComponent implements OnInit {
  public order: Order;
  public temporaryItem: Item;
  public itemSizes: string[] = Object(ItemSize);
  public itemColors: string[] = Object(ItemColor);

  constructor(private orderService: OrderService) {
    this.order = new Order();
    this.temporaryItem = new Item();
  }

  ngOnInit() {
  }

  addItem(item: Item): void {
    this.order.items.push(item);
    this.temporaryItem = new Item();
  }

  send(order: Order): void {
    console.log(order);
    console.log(this.orderService.addOrder(order));
    this.order = new Order();
  }
}
