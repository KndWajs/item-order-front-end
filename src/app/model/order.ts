import { Item } from './item';

export class Order {
  id: number;
  name: string;
  age: number;
  items: Item[];

  constructor() {
    this.items = new Array();
  }
}
