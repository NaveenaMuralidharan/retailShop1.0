import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../products.service';


export class CustomerList{
  constructor(
    public productName:String,
    public productId:string,
    public availableQuantity:number
  ){

  }
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerProducts: CustomerList[] = [];
  constructor(
    private http:HttpClient,
    private product_Data: ProductsService
  ) {

  }






  ngOnInit(): void {
    this.product_Data.getData().subscribe(result => {console.log(result);
      this.customerProducts=result
    })
  }

  

}
