import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RatingsComponent } from './ratings/ratings.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import  { HttpClientModule } from '@angular/common/http';
import { WasherDashboardComponent } from './washer/washer-dashboard/washer-dashboard.component';
import { PendingOrdersComponent } from './washer/pending-orders/pending-orders.component';
import { CompletedOrdersComponent } from './washer/completed-orders/completed-orders.component';
import { WashpacksComponent } from './washer/washpacks/washpacks.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { AllOrdersComponent } from './orders/all-orders/all-orders.component';
import { CancelledOrdersComponent } from './orders/cancelled-orders/cancelled-orders.component';

import { UsersDashboardComponent } from './User/users-dashboard/users-dashboard.component';
import { AddorderComponent } from './User/addorder/addorder.component';


@NgModule({
  declarations: [
    AppComponent,
    RatingsComponent,
    AboutComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    WasherDashboardComponent,
    PendingOrdersComponent,
    CompletedOrdersComponent,
    WashpacksComponent,
    AddOrderComponent,
    AllOrdersComponent,
    CancelledOrdersComponent,
    UsersDashboardComponent,
    AddorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
