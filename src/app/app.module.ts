import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { OrderService } from './order.service';
import { OrderComponent } from './order/order.component';
import './style.css';
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
    ItemListComponent,
    MessagesComponent
  ],
  providers: [
    MessageService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
