import { Component, OnInit } from 'angular-ts-decorators';

@Component({
  selector: 'app-summary',
  template: require('./summary.component.html'),
  styles: [require('./summary.component.scss')]
})
export class SummaryComponent implements OnInit {

  /*@ngInject*/
  constructor() { }

  ngOnInit() {
  }
}
