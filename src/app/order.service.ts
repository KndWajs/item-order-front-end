import { IHttpService, IPromise, IQService } from 'angular';
import { Injectable } from 'angular-ts-decorators';
import { environment } from '../environments/environment';
import { Order } from './model/order';


@Injectable('orderService')
export class OrderService {
  private endpoint = environment.endpoint;

  constructor(private $http: IHttpService, private $q: IQService) { }

  addOrder(order: Order): IPromise<Order> {
    const deferred = this.$q.defer<Order>();
    this.$http.post<Order>(this.endpoint + 'orders/', order).then(response => {
      deferred.resolve(response.data);
    }, error => {
      console.log(error);
      deferred.reject(error);
    });
    return deferred.promise;
  }

  getAllOrders(): IPromise<Order[]> {
    const deferred = this.$q.defer<Order[]>();
    this.$http.get<Order[]>(this.endpoint + 'orders/').then(response => {
      deferred.resolve(response.data);
    }, error => {
      console.log(error);
      deferred.reject(error);
    });
    return deferred.promise;
  }
}
