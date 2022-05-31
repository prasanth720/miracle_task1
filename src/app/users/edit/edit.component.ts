import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers:[DatePipe]
})
export class EditComponent implements OnInit {

  reactiveForm: FormGroup;
  lang = [
    { name: "HTML" },
    { name: "ReactJS" },
    { name: "Angular" },
    { name: "Bootstrap" },
    { name: "PrimeNG" },
  ];

  country = [
    { name: 'Afghanistan'},
    { name: 'Åland Islands' },
    { name: 'Albania' },
    { name: 'Algeria' },
    { name: 'Bahamas' },
    { name: 'Bahrain' },
    { name: 'Bangladesh' },
    { name: 'Barbados' },
    { name: 'Cameroon' },
    { name: 'Canada'},
    { name: 'Cape Verde' },
    { name: 'Cayman Islands' },
    { name: 'Central African Republic' },
    { name: 'Chad' },
    { name: 'Chile'},
    { name: 'China' },
    { name: 'Christmas Island' },
    { name: 'Cocos (Keeling) Islands' },
    { name: 'Colombia' },
    { name: 'Comoros', code: 'KM' },
    { name: 'Iceland', code: 'IS' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic Of', code: 'IR' },
    { name: 'Iraq', code: 'IQ' },
    { name: 'Ireland', code: 'IE' },
    { name: 'Isle of Man', code: 'IM' },
    { name: 'Israel', code: 'IL' },
    { name: 'Italy', code: 'IT' },
    { name: 'Jamaica', code: 'JM' },
    { name: 'Japan', code: 'JP' },
    { name: 'United Arab Emirates', code: 'AE' },
    { name: 'United Kingdom', code: 'GB' },
    { name: 'United States', code: 'US' },
    { name: 'United States Minor Outlying Islands', code: 'UM' },
    { name: 'Uruguay', code: 'UY' },
    { name: 'Uzbekistan', code: 'UZ' },
    { name: 'Vanuatu', code: 'VU' },
    { name: 'Venezuela', code: 'VE' },
    { name: 'Viet Nam', code: 'VN' },
    { name: 'Virgin Islands, British', code: 'VG' },
    { name: 'Virgin Islands, U.S.', code: 'VI' },
    { name: 'Wallis and Futuna', code: 'WF' },
    { name: 'Western Sahara', code: 'EH' },
    { name: 'Yemen', code: 'YE' },
    { name: 'Zambia', code: 'ZM' },
    { name: 'Zimbabwe', code: 'ZW' }
  ];

  district = [
    { name: "srikakulam" },
    { name: "vizianagaram" },
    { name: "vishkapatanam" },
    { name: "East godavari" },
    { name: "West godavari" },
    { name: "rajamehendravaram" },
    { name: "vijayawada" },
    { name: "guntur" },
    { name: "prakasam" },
    { name: "tirupathi" },
    { name: "kadapa" },
    { name: "kurnool" },
    { name: "ananthapuram" }

  ];
  states = [
    { name: "Andaman and Nicobar Islands" },
    { name: "Andhra Pradesh" },
    { name: "Arunachal Pradesh" },
    { name: "Assam" },
    { name: "Bihar" },
    { name: "Chandigarh" },
    { name: "Chhattisgarh" },
    { name: "Dadra and Nagar Haveli" },
    { name: "Daman and Diu" },
    { name: "Delhi" },
    { name: "Goa" },
    { name: "Gujarat" },
    { name: "Haryana" },
    { name: "Himachal Pradesh" },
    { name: "Jammu and Kashmir" },
    { name: "Jharkhand" },
    { name: "Karnataka" },
    { name: "Kerala" },
    { name: "Ladakh" },
    { name: "Lakshadweep" },
    { name: "Madhya Pradesh" },
    { name: "Maharashtra" },
    { name: "Manipur" },
    { name: "Meghalaya" },
    { name: "Mizoram" },
    { name: "Nagaland" },
    { name: "Orissa" },
    { name: "Pondicherry" },
    { name: "Punjab" },
    { name: "Rajasthan" },
    { name: "Sikkim" },
    { name: "Tamil Nadu" },
    { name: "Telangana" },
    { name: "Tripura" },
    { name: "Uttaranchal" },
    { name: "Uttar Pradesh" },
    { name: "West Bengal" }]
  swift = [
      { timings: "2PM - 11PM" },
      { timings: "3PM - 12AM" },
      { timings: "4PM - 1AM" },
      { timings: "6PM - 3AM" },
  
    ];
depart = [
      { name: "B2B" },
      { name: "MEAN STACK" },
      { name: "DATABASE" },
      { name: "SAP" },
      { name: "INTEGRATION" },
    ];

  status = [
    { name: "Active" },
    { name: "Inactive" }
  ]
 
  empid: any;
  user1: any;
  msgs: any;
  msgs1:any;
  users: any;
  data:any =[];
  val: string | null;
  val1: any;
  user: any;

  constructor(private formBuilder: FormBuilder,private service:UsersService, public roter: Router, public aroute: ActivatedRoute ,private date:DatePipe) { }

  ngOnInit(): void {

    let users =JSON.parse(localStorage.getItem('user1') || '[]')
    this.data.push(users)
    console.log("userss",this.data)
    this.reactiveForm = this.formBuilder.group({
      FirstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]*$/)]],
      MiddleName: [''],
      LastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(15),Validators.pattern(/^[a-zA-Z]*$/)]],
      EmpID: ['', [Validators.required, Validators.maxLength(15),Validators.pattern(/^[0-9]*$/)]],
      Originzation: [''],
      Swift_Timings: [''],
      Status: ['', [Validators.required]],
      doj: [''],
      Department: [''],
      Work_Phone: ['', [ Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Personal_Phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      Cooparate_mail: ['', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Personal_mail: ['', [ Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      Skills: [''],
      gender: [''],
      Address1: [''],
      Address2: [''],
      Country: ['', [Validators.required]],
      State: ['', [Validators.required]],
      City: ['', [Validators.required]],
      zip: ['', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      Facebook: [''],
      LinkedIn: [''],
      Twitter: ['']

    })
    this.empid = this.aroute.snapshot.params.emp;
    console.log(this.empid)
    this.patchData()
    
  }

  onsubmit() {
    if (this.reactiveForm.valid) {
      this.user = Object.assign(this.user, this.reactiveForm.value);
      this.msgs = [{ severity: 'success', summary: 'success', detail: 'User  Added  Successfully' }]
      this.onUpdate()
    }
    else {
      this.reactiveForm.markAllAsTouched();
      this.msgs1 = [{ severity: 'warn', summary: 'warn', detail: 'User not Added ' }]
    }
    
  }
  patchData() {
    this.users = JSON.parse(localStorage.getItem('user1') || '{}');
    console.log("getdata", this.users)
    this.users.forEach(element => {
      // console.log(element)
      if (element.EmpID == this.empid) {
        this.user1 = element
        console.log("user data",this.user1)
      }
    });
    console.log(this.user1.doj)
    
    this.reactiveForm.patchValue({
     
      Cooparate_mail:this.user1.Cooparate_mail,
      doj:this.user1.doj,
      EmpID:this.user1.EmpID,
      Department:this.user1.Department,
      Address1:this.user1.Address1,
      Address2:this.user1.Address2,
      Status:this.user1.Status,
      FirstName:this.user1.FirstName,
      City:this.user1.City,
      LastName:this.user1.LastName,
      MiddleName:this.user1.MiddleName,
      State: this.user1.State,
      Personal_Phone:this.user1.Personal_Phone,
      Personal_mail:this.user1.Personal_mail,
      Originzation:this.user1.Originzation,
      Skills:this.user1.Skills,
      Country:this.user1.Country,
      Swift_Timings:this.user1.Swift_Timings,
      Work_Phone:this.user1.Work_Phone,
      gender:this.user1.gender,
      zip:this.user1.zip,
      Facebook:this.user1.Facebook,
      LinkedIn:this.user1.LinkedIn,
      Twitter:this.user1.Twitter,
    })
  }

  onUpdate()
  {
      console.log("update", this.data)
      // console.log(this.reactiveForm.value)
    const datas = {
      Address1:this.reactiveForm.value.Address1 ,
      Address2:this.reactiveForm.value.Address2,
      City:this.reactiveForm.value.City,
      Cooparate_mail:this.reactiveForm.value.Cooparate_mail,
      Country:this.reactiveForm.value.Country ,
      Department:this.reactiveForm.value.Department ,
      EmpID:this.reactiveForm.value.EmpID ,
      FirstName:this.reactiveForm.value.FirstName ,
      LastName: this.reactiveForm.value.LastName,
      MiddleName:this.reactiveForm.value.MiddleName ,
      Originzation:this.reactiveForm.value.Originzation ,
      Personal_Phone:this.reactiveForm.value.Personal_Phone ,
      Personal_mail:this.reactiveForm.value.Personal_mail ,
      Skills:this.reactiveForm.value.Skills ,
      State:this.reactiveForm.value.State,
      Status: this.reactiveForm.value.Status,
      Swift_Timings:this.reactiveForm.value.Swift_Timings,
      Work_Phone:this.reactiveForm.value.Work_Phone ,
      doj: this.reactiveForm.value.doj,
      gender:this.reactiveForm.value.gender ,
      zip:this.reactiveForm.value.zip,
      Facebook: this.reactiveForm.value.Facebook,
      LinkedIn: this.reactiveForm.value.LinkedIn,
      Twitter: this.reactiveForm.value.Twitter
    }
console.log("data update",datas)
    
        for(let i in this.users)
        {
          if(this.users[i].EmpID==datas.EmpID){
            console.log("if inside: ",this.users[i])
            this.users[i]=datas
            console.log("After assign: ",this.users[i])
          console.log(i)
          }
        }
        
      localStorage.setItem('user1', JSON.stringify(this.users))
    // this.msgs = [{ severity: 'success', summary: 'success', detail: 'User  Added  Successfully' }]
    this.roter.navigate(['/purchase'])
    // }
    // else{
      // this.reactiveForm.markAllAsTouched();
      // this.msgs1 = [{ severity: 'warn', summary: 'warn', detail: 'User not Added ' }]
    // } 
    
    
  }

  cancel()
  {
    this.roter.navigate(['/purchase'])
  }
}