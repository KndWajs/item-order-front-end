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
  public itemNotAvaliable: boolean;
  public updatingBasket;
  public itemSizes = ItemSize;
  public itemColors = ItemColor;

  constructor(private orderService: OrderService) {
    this.order = new Order();
  }

  ngOnInit() {
    this.setDefaultTemporaryItem();
  }

  addItem(item: Item): void {
    this.updatingBasket = true;
    this.orderService.checkItemAvailability(item).then(amount => {
      if (this.checkItemAvailability(amount)) {
        this.order.items.push(item);
        this.setDefaultTemporaryItem();
        this.updatingBasket = false;
      } else {
        this.itemNotAvaliable = true;
        this.updatingBasket = false;
      }
    });
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
    this.itemNotAvaliable = false;
  }

  checkItemAvailability(amountInStore: number): boolean {
    const item: Item = new Item();
    item.color = this.temporaryItem.color;
    item.size = this.temporaryItem.size;
    const amountInBasket: number = this.order.items.filter(i => i.color === item.color && i.size === item.size).length;

    return amountInStore - amountInBasket > 0;
  }

}

