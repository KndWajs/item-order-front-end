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
  public temporaryItem: any;
  public itemSizes = ItemSize;
  public itemColors = ItemColor;

  constructor(private orderService: OrderService) {
    this.order = new Order();
  }

  ngOnInit() {
    this.setDefaultTemporaryItem();
  }

  addItem(item: Item): void {
    this.order.items.push(item);
    this.setDefaultTemporaryItem();
  }

  send(order: Order, form: any): void {
    this.orderService.addOrder(order);
    this.order = new Order();
    form.$setPristine();
    form.$setUntouched();
    this.setDefaultTemporaryItem();
  }

  setDefaultTemporaryItem(): void {
    this.temporaryItem = new Item();
    this.temporaryItem.size = 'S';
    this.temporaryItem.color = 'BLUE';
  }
}
