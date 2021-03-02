import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerList } from '../customer-list/customer-list.component';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  index=0;
  itemList: CustomerList[]= [];


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductsService,
    private http:HttpClient
  ) { }

  ngOnInit(): void {
    this.index=this.route.snapshot.params.rowId;
    this.service.getData().subscribe(result => {console.log(result);
      this.itemList=result
    })
  }
  onSubmit(f:NgForm){
    const orderItem={
      productId: this.itemList[this.index].productId,
      ...f.value
    }
    this.service.orderProduct(orderItem)
      .subscribe(
        (result)=>{
          alert("Order Placed");
          f.reset()
        },
        (error)=>{
          alert(error.message)
        }
      )

  }

}
