import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HomeComponent } from './components/home/home.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [

{path:'list-user', component:ListUserComponent},
{path:'home', component:HomeComponent},
{path:'create-user', component: CreateUserComponent},
{path:'login', component:LoginComponent},
{path:'forget-password', component:ForgetPasswordComponent},
{path:'admin', component:AdminComponent},
{path:'payment', component:PaymentComponent},
{path:'checkout',component:CheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
