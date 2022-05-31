import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  x: string | null;
  userss: any = [];



  constructor(private http: HttpClient, private messageservice: MessageService) { }
  
  addSingle(summary:any,detail:any) {
    this.messageservice.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
  }

  // addMultiple() {
  //   this.messageservice.addAll([{ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
  //   { severity: 'info', summary: 'Info Message', detail: 'Via MessageService' }]);
  // }

  clear() {
    this.messageservice.clear();
  }


  getusers() {
    let users = JSON.parse(localStorage.getItem('user1') || '[]')

    return users
  }

  getdata()
  {
    return this.http.get('http://172.17.10.66:8080/customer')
  }
  create_user(data: any) {
    this.x = localStorage.getItem('user1')
    this.userss = JSON.parse(JSON.stringify(this.x))
    let users = JSON.parse(localStorage.getItem('user1') || '[]')
    console.log(users)
    users.push(data)

    localStorage.setItem('user1', JSON.stringify(users))

  }

  deleteuser(data: number) {
    let users = JSON.parse(localStorage.getItem('user1') || '[]')
    for (let i = 0; i < users.length; i++) {
      if (users[i].EmpID == data) {
        users.splice(i, 1)
      }
      localStorage.setItem('user1', JSON.stringify(users));

    }

  }
  // updateUser(olduser,newuser){
  //   let users =JSON.parse(localStorage.getItem('user1') || '[]' )
  //   console.log("users update",users)
  //   for( let i=0 ;i<users.length;i++)
  //   {
  //     if(users[i].EmpID==olduser.EmpID)
  //     {
  //       users.splice(i,1)
  //     }
  //   }
  //   localStorage.setItem('user1',JSON.stringify(users));
  //   localStorage.setItem('user1',JSON.stringify(newuser));
  // }

  updateUser(olduser, newuser) {
    let users = JSON.parse(localStorage.getItem('users1') || '[]')
    let emps = JSON.parse(localStorage.getItem('users1') || '[]');

    console.log("emps", emps)
    // var usersall =JSON.stringify(users)
    // for(let i=0 ;i<users1;i++)
    // {
    //   if(users[i].EmpID==olduser){

    //   console.log(i)
    //   }
    // }
  }
}




