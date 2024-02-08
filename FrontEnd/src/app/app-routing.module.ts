import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { AdminComponent } from './admin/admin.component';
import { OwneroperationsComponent } from './owneroperations/owneroperations.component';
import { HomeComponent } from './home/home.component';
import { ViewhouseComponent } from './viewhouse/viewhouse.component';
import { PaymentComponent } from './payment/payment.component';
import { ViewtenantsComponent } from './viewtenants/viewtenants.component';
import { RegisterComponent } from './register/register.component';
import { TenantcrudComponent } from './tenantcrud/tenantcrud.component';
import { HouseownercrudComponent } from './houseownercrud/houseownercrud.component';
import { ViewhouseownersComponent } from './viewhouseowners/viewhouseowners.component';
import { TenantoperationsComponent } from './tenantoperations/tenantoperations.component';
import { LogincompComponent } from './logincomp/logincomp.component';
import { ReviewComponent } from './review/review.component';
import { PayrentComponent } from './payrent/payrent.component';
import { ViewreviewComponent } from './viewreview/viewreview.component';

const routes: Routes = [
 {path:'owner',component:OwnerComponent},{path:'admin',component:AdminComponent},
  {path:'owneroperation',component:OwneroperationsComponent},  {path:'home',component:HomeComponent},
  {path:'viewhouse',component:ViewhouseComponent},
  {path:'paymentstatus',component:PaymentComponent},
  {path:'viewtenant',component:ViewtenantsComponent},
  {path:'register',component:RegisterComponent},
  {path:'tenantcrud',component:TenantcrudComponent},
  {path:'houseownercrud',component:HouseownercrudComponent},
  {path:'viewhouseowners',component:ViewhouseownersComponent},
  {path:'tenantoperations',component:TenantoperationsComponent},
  {path:'logincomp',component:LogincompComponent},
  {path:'review',component:ReviewComponent},
  {path:'payrent',component:PayrentComponent},
  {path:'viewreview',component:ViewreviewComponent},
  {path:'',component:HomeComponent}





  












];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
