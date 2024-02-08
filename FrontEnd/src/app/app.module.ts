import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OwnerComponent } from './owner/owner.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { OwneroperationsComponent } from './owneroperations/owneroperations.component';
import { RouterModule,Routes } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HouseService } from './house.service';
import { HttpClientModule } from '@angular/common/http';
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




@NgModule({
  declarations: [
    AppComponent,
    
    OwnerComponent,
    AdminComponent,
    OwneroperationsComponent,
    HomeComponent,
    ViewhouseComponent,
    PaymentComponent,
    ViewtenantsComponent,
    RegisterComponent,
    TenantcrudComponent,
    HouseownercrudComponent,
    ViewhouseownersComponent,
    TenantoperationsComponent,
    LogincompComponent,
    ReviewComponent,
    PayrentComponent,
    ViewreviewComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatListModule,MatSidenavModule,RouterModule,FormsModule,ReactiveFormsModule,
    MatTabsModule,MatButtonModule,MatToolbarModule,MatDividerModule,MatIconModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [HouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
