import { Component, Input, OnInit } from 'angular-ts-decorators';
import { Item } from '../model/item';
import { ItemColor } from '../model/item-color';
import { ItemSize } from '../model/item-size';

@Component({
  selector: 'app-item-list',
  template: require('./item-list.component.html'),
  styles: [require('./item-list.component.scss')],
})
export class ItemListComponent implements OnInit {
  @Input() items: Item[];

  constructor() {
  }

  ngOnInit() {
  }

  getColorDescription(color: any): string {
    return ItemColor[color];
  }

  getSizeDescription(size: any): string {
    return ItemSize[size];
  }
}
