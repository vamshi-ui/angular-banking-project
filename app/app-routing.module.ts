import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AppComponent } from './app.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { DeleteComponent } from './delete/delete.component';
import { DepositComponent } from './deposit/deposit.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransferComponent } from './transfer/transfer.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
 
  {path:"home",component:HomeComponent},
  {path:"app",component:AppComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'userlogin',component:UserloginComponent},
{path:"userhome",component:UserhomeComponent,
children:[
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'myinfo',component:MyinfoComponent},
  {path:'deposit',component:DepositComponent},
  {path:'transfer',component:TransferComponent}
  ]
},
{path:"adminhome",component:AdminhomeComponent,
children:[
{path:'users',component:UsersComponent},
{path:'trasactions',component:TransactionsComponent},
{path:'delete',component:DeleteComponent}
]
},
{path:'userregister',component:UserregisterComponent},
{path:'forgotpassword',component:ForgotpasswordComponent},
{path:'',redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
