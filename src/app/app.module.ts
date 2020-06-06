import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { OrderComponent } from './order/order.component';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  id: 'AppModule',
  imports: [
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    OrderComponent,
    SummaryComponent,
    MessagesComponent
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
