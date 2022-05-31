import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPurchaseOrderComponent } from './users/add-purchase-order/add-purchase-order.component';
import { EditComponent } from './users/edit/edit.component';
import { HtmlScreenComponent } from './users/html-screen/html-screen.component';
import { PurchaseComponent } from './users/purchase/purchase.component';



const routes: Routes = [

  {path:'html-screen',component:HtmlScreenComponent},
  {path:"edit/:emp",component:EditComponent},
  {path:'addPurchase',component:AddPurchaseOrderComponent},
  {path:"purchase",component:PurchaseComponent},
  { path: '', redirectTo: '/purchase', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
