import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerList} from './customer-list/customer-list.component';
import {environment} from '../environments/environment.prod'

const orderUrl = environment.productUrl+"/orderProducts";

const url = environment.productUrl+"/product"




@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(
    private http: HttpClient
  ) { }
  

  getData(): Observable<CustomerList[]> {
    return this.http.get<CustomerList[]>(url)
  }
  
  orderProduct(data): Observable<any> {
    return this.http.post(orderUrl, data)
  }
}
