import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerList} from './customer-list/customer-list.component';
import {environment} from '../environments/environment.prod'

const orderUrl = environment.productUrl+"/order";

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
    console.log(orderUrl)
    return this.http.post(orderUrl, data)
  }
}
