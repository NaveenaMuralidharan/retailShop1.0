import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { ProductsService } from '../products.service';
import swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productName: any;
  itemQuantity;


  constructor(
    private productsService:ProductsService
  ) { }

  onSubmit(f:NgForm){
    const addList={
      productName : f.value.productName,
      availableQuantity : f.value.itemQuantity
        }
    if(f.value.productName >='a' && f.value.productName <= 'z' && f.value.productName >='A'){  
      this.productsService.addProduct(addList)
        .subscribe(
          (result)=>{
            // alert("Product Added");
            swal.fire("Product Added:)");
            f.reset()
          },
          (error)=>{
            // alert(error.message)
            swal.fire("Failed:(");
          }
        )
    }
    else{
      swal.fire("Insert Correct Product!!:)");
    }
  }

  ngOnInit(): void {
  }
  validName(itemValue){
    this.productName=itemValue;
    if(itemValue >='a' && itemValue<='z' && itemValue.length<=30 || itemValue >='A' && itemValue<='Z' && itemValue.length<=30 )
    {

    }
    else{
      swal.fire("Insert Correct Product :)");
    }
  }
    validValue(itemValue){
      this.itemQuantity=itemValue;
     if(itemValue >=0 && itemValue<=1000){

      }
      else{
        swal.fire("Quantity Cannot Be More Than Thousand!:)")
      }
    }
  }

    

  
  // validqty(itemqty){
  //   console.log(itemqty,this.validQuantity)
  //   if(this.validQuantity<'0' && this.validQuantity>'999')
  //   {
  //     // alert("error");
  //     swal.fire("Given Quantity is exceeding");
  //   }

  

