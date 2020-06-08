import { IHttpService, IPromise, IQService } from 'angular';
import { Injectable } from 'angular-ts-decorators';
import { environment } from '../environments/environment';
import { Item } from './model/item';
import { Order } from './model/order';



@Injectable('orderService')
export class OrderService {
  private endpoint = environment.endpoint;

  constructor(private $http: IHttpService, private $q: IQService) { }

  addOrder(order: Order): IPromise<Order> {
    const deferred = this.$q.defer<Order>();
    this.$http.post<Order>(this.endpoint + 'orders', order).then(response => {
      deferred.resolve(response.data);
    }, error => {
      console.log(error);
      deferred.reject(error);
    });
    return deferred.promise;
  }

  getAllOrders(): IPromise<Order[]> {
    const deferred = this.$q.defer<Order[]>();
    this.$http.get<Order[]>(this.endpoint + 'orders').then(response => {
      deferred.resolve(response.data);
    }, error => {
      console.log(error);
      deferred.reject(error);
    });
    return deferred.promise;
  }

  checkItemAvailability(item: Item): IPromise<number> {
    const deferred = this.$q.defer<number>();
    this.$http.post<number>(this.endpoint + 'availability', item).then(response => {
      deferred.resolve(response.data);
    }, error => {
      console.log(error);
      deferred.reject(error);
    });
    return deferred.promise;
  }
}
