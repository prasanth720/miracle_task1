import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';
import { Location } from '@angular/common'
import { UsersModule } from '../users.module';
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  cols = [
    { field: 'Sno', header: "Sno",width: '15%'},
    { field: "FirstName", header: "FirstName",width: '20%' },
    { field: "Status", header: "Status" ,width: '20%'},
    { field: "Department", header: "Department",width: '15%' },
    { field: "Swift_Timings", header: "Swift_Timings",width: '20%' },
    { field: "Action", header: "Action",width: '20%' },
    ];
  items: any;
  data: any;
  gSearch: ''
  basicData: any;
  mydate = Date.now();
  basicOptions: any;
  data1: any
  users: any;
  user3: boolean;
  msgs: any = [];
  api: any;
  superheroes='superhero'
  constructor(private service: UsersService, private route: Router,private location:Location,private users_service:UsersService) { }

  ngOnInit(): void {

    this.data= JSON.parse(localStorage.getItem('user1') || '[]')
    console.log(this.data,"users1")
    this.service.getdata().subscribe((response)=>
  {
    this.api=response
    console.log(response)
  })
    
  }
  getusers()
  {  
      let users =JSON.parse(localStorage.getItem('user1') || '[]')
    
    return users
  }
  add() {
    this.route.navigate(['/addPurchase','superheros'])
  }

  edit(emp: number) {
    console.log(emp)
    this.route.navigate(["/edit", emp])
  }


    deleteUser(ids: number) {
      this.users =JSON.parse(localStorage.getItem('user1')|| '[]')
      console.log(this.users)
      let id = this.data.findIndex(del => del.EmpID == ids)
      // var res = confirm("Are you sure to delete this id");
      // if (res == true) {
      this.users.splice(id, 1)
      // }
      this.service.addSingle('Deleted', 'Sucessfully Deleted From List')
      localStorage.setItem('user1', JSON.stringify(this.users));
      this.ngOnInit()
      console.log(this.users,"users")
    
}

nameField(name:any){
  if(name.length>=10){
    return name.slice(0,9)+'...'
  }
  else{
    return name
  }
}


}

