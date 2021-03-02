import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerList} from './customer-list/customer-list.component';

const url = "https://uiexercise.onemindindia.com/api/Product";

const orderUrl = "https://uiexercise.onemindindia.com/api/OrderProducts";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient
  ) { }
  listProducts?: CustomerList[];


  getData(): Observable<CustomerList[]> {
    return this.http.get<CustomerList[]>(url)
  }

  addProduct(data): Observable<any> {
    return this.http.post(url, data)
  }
  orderProduct(data): Observable<any> {
    return this.http.post(orderUrl, data)
  }
}
