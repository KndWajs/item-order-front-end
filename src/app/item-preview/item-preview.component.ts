import { Component, OnInit, Input } from 'angular-ts-decorators';
import { Item } from '../model/item';
import { ItemSize } from '../model/item-size';

@Component({
  selector: 'app-item-preview',
  template: require('./item-preview.component.html'),
  styles: [require('./item-preview.component.scss')]
})
export class ItemPreviewComponent implements OnInit {
  @Input() item: Item;

  constructor() {
  }

  ngOnInit() {
  }

  countSize(itemSize: ItemSize): string {
    switch (itemSize) {
      case 'S':
        return '25px';
      case 'M':
        return '50px';
      case 'L':
        return '75px';
      case 'XL':
        return '100px';
    }
  }
}

