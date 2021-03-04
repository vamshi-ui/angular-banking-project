import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DeleteComponent } from './delete/delete.component';
import { DepositComponent } from './deposit/deposit.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransferComponent } from './transfer/transfer.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UsersComponent } from './users/users.component';
import { UserService } from "./user.service";
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminloginComponent,
    AdminhomeComponent,
    ChangepasswordComponent,
    DeleteComponent,
    DepositComponent,
    ForgotpasswordComponent,
    MyinfoComponent,
    TransactionsComponent,
    TransferComponent,
    UserloginComponent,
    UserhomeComponent,
    UserregisterComponent,
    UsersComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
