import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingsComponent } from './ratings/ratings.component';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WasherDashboardComponent } from './washer/washer-dashboard/washer-dashboard.component';
import { PendingOrdersComponent } from './washer/pending-orders/pending-orders.component';
import { CompletedOrdersComponent } from './washer/completed-orders/completed-orders.component';
import { WashpacksComponent } from './washer/washpacks/washpacks.component';

import { AddOrderComponent } from './orders/add-order/add-order.component';
import { UsersDashboardComponent } from './User/users-dashboard/users-dashboard.component';
import { AddorderComponent } from './User/addorder/addorder.component';
import { UserwashpacksComponent } from './User/userwashpacks/userwashpacks.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddWasherComponent } from './admin/add-washer/add-washer.component';
import { AllOrdersComponent } from './orders/all-orders/all-orders.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { ManageOrdersComponent } from './admin/manage-orders/manage-orders.component';
import { OrderstatusComponent } from './admin/orderstatus/orderstatus.component';

const routes: Routes = [

  { path: '', component: HomepageComponent },
  {path:'login',component:LoginComponent},
  {path:'signup',component: SignupComponent},
  { path: 'ratings', component: RatingsComponent },
  { path: 'about', component: AboutComponent },
  //washer
  {path:'washer',component: WasherDashboardComponent,
    children:[
        {path:'pendingOrders', component:PendingOrdersComponent},
        {path:'completedOrders',component:CompletedOrdersComponent},
        {path:'washPacks',component:WashpacksComponent}

    ]
  },
  {path:'forgotPassword',component:ForgotPasswordComponent},
  //user
  {path:'user',component:UsersDashboardComponent,
  children:[
    {path:'addOrder',component:AddorderComponent},
    {path:'washPacks',component:UserwashpacksComponent},

  ]

},
{path:'admin',component:AdminDashboardComponent,
children:[
  {path:'addWasher',component: AddWasherComponent},
  {path:'allOrders',component:ManageOrdersComponent},
  {path:'orderStatus/:orderId',component:OrderstatusComponent},

  {path:'allUsers',component:AllUsersComponent},

]


},


  { path: '', redirectTo: '/', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
