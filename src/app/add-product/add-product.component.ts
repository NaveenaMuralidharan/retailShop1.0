import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(
    private productsService:ProductsService
  ) { }

  onSubmit(f:NgForm){
    this.productsService.addProduct(f.value)
      .subscribe(
        (result)=>{
          alert("Product Added");
          f.reset()
        },
        (error)=>{
          alert(error.message)
        }
      )

  }

  ngOnInit(): void {
  }

}
