import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private basePath:string='http://localhost:5050';

  constructor(private http:HttpClient) { }

// namedata: Observable<any>;
//  name=localStorage.getItem("ename");
// public getname(){
//   this.namedata=new Observable(observer=>{
//     observer.next(name);
//   })
// }


public userMaxId():Observable<any>
{

  return this.http.get(`${this.basePath}/usermaxid`);

}  


public userRegister(user:User):Observable<any>
{

  return this.http.post(`${this.basePath}/userinsert`,user,{responseType:'text'});

}


public allUsers():Observable<User[]>
{

  return this.http.get<User[]>(`${this.basePath}/allusers`);

}  


public getPermission(accno:number):Observable<any>
{

  let obj={"accno":accno};
  return this.http.put(`${this.basePath}/permission`,obj,{responseType:'text'});

}



public userLogin(accnoOremail,password):Observable<any>
{

  let user={"accnoOremail":accnoOremail,"password":password};
  return this.http.post(`${this.basePath}/userlogin`,user,{responseType:'text'});
}



public checkPermission(accnoOremail):Observable<any>
{

  return this.http.get(`${this.basePath}/permissionCheck/${accnoOremail}`,{responseType:'text'});

}

public getUser(accnoOremail):Observable<any>
{
return this.http.get(`${this.basePath}/getUser/${accnoOremail}`)

}

public changePassword(email,password):Observable<any>
{

let obj={"email":email,"password":password};
return this.http.put(`${this.basePath}/changePassword`,obj,{responseType:'text'});
}



public deposit(email,balance):Observable<any>
{

  let obj={"email":email,"balance":balance};

  return this.http.post(`${this.basePath}/deposit`,obj,{responseType:'text'});

}



public transfer(senderEmail,receiverEmail,balance):Observable<any>
{

  let obj={"senderEmail":senderEmail,"receiverEmail":receiverEmail,"balance":balance};
  return this.http.post(`${this.basePath}/transfer`,obj,{responseType:'text'});

}


public forgotPassword(accnoOremail):Observable<any>
{


  return this.http.get(`${this.basePath}/forgotPassword/${accnoOremail}`,{responseType:'text'});


}


public getAccountNos():Observable<any>
{
  return this.http.get(`${this.basePath}/getAllAccnos`);
}

public deleteAccount(accno,email):Observable<any>
{

  return this.http.delete(`${this.basePath}/accountDelete/${accno}/${email}`,{responseType:'text'});
}

public getDepositInfoAndTransferInfo(accno):Observable<any>
{

  return this.http.get(`${this.basePath}/getDepositInfoAndMoneyTransferInfo?accno=${accno}`);

}


}
