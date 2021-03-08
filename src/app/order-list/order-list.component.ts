import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerList } from '../customer-list/customer-list.component';
// import { ProductsService } from '../products.service';
import swal from 'sweetalert2/dist/sweetalert2.js';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  // index=0;
  // itemList: CustomerList[]= [];
  validvalue;
  index:any;
  product;
  orderedQuantity=1;
  productID:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: OrdersService,
    private http:HttpClient
  ) { }
  
  

  ngOnInit(): void {
    this.index=this.route.snapshot.params.rowId;
    this.service.getData().subscribe(result => {
      result.forEach(product=>{
        if(product.productId==this.index){
          this.product = product;
        }
      })
    })
  }
  
  onSubmit(f:NgForm){
    const orderItem={
      productId: this.product.productId,
      quantity:f.value.availableQuantity,
      // ...f.value
    }
    this.service.orderProduct(orderItem)
      .subscribe(
        (result)=>{
          // alert("Order Placed");
          // console.log(result)
          swal.fire("Order Placed:)");

          f.reset()
        },
        (error)=>{
          // alert(error.message)
          swal.fire("Failed:(");
        }
      )

  }
  valqty(val){
    console.log(val,this.validvalue)
    if(this.validvalue>val)
    {
      // alert("error");
      swal.fire("Given quantity is more than available :(");
    }
  } 

}
