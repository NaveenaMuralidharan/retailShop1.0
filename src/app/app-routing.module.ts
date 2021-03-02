import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent} from './add-product/add-product.component';
import { CustomerList, CustomerListComponent} from './customer-list/customer-list.component'
import { OrderListComponent } from './order-list/order-list.component';

const routes: Routes = [
  {path:'customer-list',component:CustomerListComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'order-list/:rowId',component:OrderListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[CustomerListComponent,AddProductComponent,OrderListComponent]
