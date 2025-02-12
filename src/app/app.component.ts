import { StateService } from '@uirouter/angularjs';
import { Component } from 'angular-ts-decorators';

@Component({
  selector: 'app-root',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')]
})
export class AppComponent {

  constructor(private $state: StateService) {}

}
