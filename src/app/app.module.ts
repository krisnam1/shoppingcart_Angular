import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarrComponent } from './components/navbarr/navbarr.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { ChangeLanguageComponent } from './components/change-language/change-language.component';

import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {UserService} from './UserService/thepustakari.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './components/payment/payment.component';
import { CheckoutComponent } from './components/checkout/checkout.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarrComponent,
    CreateUserComponent,
    EditUserComponent,
    ListUserComponent,
    DeleteUserComponent,
    HomeComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ChangeLanguageComponent,
    
    UserComponent,
    
    AdminComponent,
    
    AboutComponent,
    
    PaymentComponent,
    
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
