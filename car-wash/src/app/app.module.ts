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
import  { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { WasherDashboardComponent } from './washer/washer-dashboard/washer-dashboard.component';
import { PendingOrdersComponent } from './washer/pending-orders/pending-orders.component';
import { CompletedOrdersComponent } from './washer/completed-orders/completed-orders.component';
import { WashpacksComponent } from './washer/washpacks/washpacks.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { AllOrdersComponent } from './orders/all-orders/all-orders.component';
import { CancelledOrdersComponent } from './orders/cancelled-orders/cancelled-orders.component';

import { UsersDashboardComponent } from './User/users-dashboard/users-dashboard.component';
import { AddorderComponent } from './User/addorder/addorder.component';
import { UserwashpacksComponent } from './User/userwashpacks/userwashpacks.component';
import { UserordersComponent } from './User/userorders/userorders.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { AddWasherComponent } from './admin/add-washer/add-washer.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { OrderstatusComponent } from './admin/orderstatus/orderstatus.component';
import { AppheaderComponent } from './appheader/appheader.component';

import { AuthInterceptor } from './authguard/auth.interceptor';
import { SecurityService } from './services/security.service';
import { AllWashersComponent } from './admin/all-washers/all-washers.component';
import { AddwashpackComponent } from './admin/addwashpack/addwashpack.component';
import { ManageWashpacksComponent } from './admin/manage-washpacks/manage-washpacks.component';
import { ProfileComponent } from './User/profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


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
    AddorderComponent,
    UserwashpacksComponent,
    UserordersComponent,
    ForgotPasswordComponent,
    AdminDashboardComponent,
    AllUsersComponent,
    AddWasherComponent,
    ManageOrdersComponent,
    OrderstatusComponent,
    AppheaderComponent,
    AllWashersComponent,
    AddwashpackComponent,
    ManageWashpacksComponent,
    ProfileComponent,
    ChangePasswordComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    //  AuthGuard,
    //  {
    //     provide:HTTP_INTERCEPTORS,
    //     useClass:AuthInterceptor,
    //     multi: true
    //  },
    //  SecurityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
