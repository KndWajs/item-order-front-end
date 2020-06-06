import { Component, OnInit, Input } from 'angular-ts-decorators';
import { Item } from '../model/item';

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
}
