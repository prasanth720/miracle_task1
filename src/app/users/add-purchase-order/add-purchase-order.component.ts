import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-add-purchase-order',
  templateUrl: './add-purchase-order.component.html',
  styleUrls: ['./add-purchase-order.component.css'],
  providers: [MessageService]
})
export class AddPurchaseOrderComponent implements OnInit {
 
  skills = [
    { lang: "HTML" },
    { lang: "ReactJS" },
    { lang: "Angular" },
    { lang: "Bootstrap" },
    { lang: "PrimeNG" },
  ];
  depart = [
    { name: "B2B" },
    { name: "MEAN STACK" },
    { name: "DATABASE" },
    { name: "SAP" },
    { name: "INTEGRATION" },
  ];
  swift = [
    { timings: "2PM - 11PM" },
    { timings: "3PM - 12AM" },
    { timings: "4PM - 1AM" },
    { timings: "6PM - 3AM" },

  ];
  country = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Åland Islands', code: 'AX' },
    { name: 'Albania', code: 'AL' },
    { name: 'Algeria', code: 'DZ' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Iran, Islamic Republic Of', code: 'IR' },
    { name: 'Paraguay', code: 'PY' },
    { name: 'Peru', code: 'PE' },
    { name: 'Philippines', code: 'PH' },
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
  states = [{ name: "Andaman and Nicobar Islands" },
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

  status = [
    { name: "Active" },
    { name: "Inactive" }
  ]
  gridData: any = [];
  user: any = {}
  res: any;
  user1: any;
  sstorage: any = [];
  msgs: any = [];
  msgs1: any = [];
  messageService: any;
  constructor(private formBuilder: FormBuilder, private route: Router ,private service:UsersService ,private message:MessageService) { }
  reactiveForm = this.formBuilder.group({
    FirstName: ['', [Validators.required,  Validators.maxLength(15),Validators.pattern(/^[a-zA-Z]*$/)]],
    MiddleName: ['' ],
    LastName: ['', [Validators.required,  Validators.maxLength(15),Validators.pattern(/^[a-zA-Z]*$/)]],
    EmpID: ['', [Validators.required, Validators.maxLength(15),Validators.pattern(/^[0-9]*$/)]],
    Originzation: ['' ],
    Swift_Timings: [''],
    Status: ['', [Validators.required]],
    doj: ['', ],
    Department: ['' ],
    Work_Phone: ['', [ Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.maxLength(10)]],
    Personal_Phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"),Validators.maxLength(10)]],
    Cooparate_mail: ['', [Validators.required, Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    Personal_mail: ['', [ Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    Skills: ['' ],
    gender: ['' ],
    Address1: [''],
    Address2: [''],
    Country: ['', [Validators.required]],
    State: ['', [Validators.required]],
    City: ['', [Validators.required]],
    zip: ['', [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/),Validators.maxLength(6)]],
    Facebook: ['',],
    LinkedIn: ['', ],
    Twitter: ['',]
  });

  ngOnInit(): void {
    let today2 = new Date().toISOString().slice(0, 10)
 this.reactiveForm.get('doj')?.patchValue(today2)
  }

  onsubmit() {
    if (this.reactiveForm.valid) {
      this.user = Object.assign(this.user, this.reactiveForm.value);
      // this.msgs = [{ severity: 'success', summary: 'success', detail: 'User  Added  Successfully' }]
      this.message.add({severity: 'success', summary: 'success', detail: 'User  Added  Successfully'})
      this.addUser()
    }
    else {
      this.reactiveForm.markAllAsTouched();
      // this.service.addSingle('Deleted', 'Sucessfully Deleted From List')
      // this.msgs1 = [{ severity: 'warn', summary: 'warn', detail: 'User not Added ' }]
    }
    
  }


  addUser() {
    // console.log(this.reactiveForm.value.Skills)
    let data = {
      Address1: this.reactiveForm.value.Address1,
      Address2: this.reactiveForm.value.Address2,
      City: this.reactiveForm.value.City,
      Cooparate_mail: this.reactiveForm.value.Cooparate_mail,
      Country: this.reactiveForm.value.Country.name,
      Department: this.reactiveForm.value.Department,
      EmpID: this.reactiveForm.value.EmpID,
      FirstName: this.reactiveForm.value.FirstName,
      LastName: this.reactiveForm.value.LastName,
      MiddleName: this.reactiveForm.value.MiddleName,
      Originzation: this.reactiveForm.value.Originzation,
      Personal_Phone: this.reactiveForm.value.Personal_Phone,
      Personal_mail: this.reactiveForm.value.Personal_mail,
      Skills: this.reactiveForm.value.Skills,
      State: this.reactiveForm.value.State.name,
      Status: this.reactiveForm.value.Status.name,
      Swift_Timings: this.reactiveForm.value.Swift_Timings,
      Work_Phone: this.reactiveForm.value.Work_Phone,
      doj: this.reactiveForm.value.doj,
      gender: this.reactiveForm.value.gender,
      zip: this.reactiveForm.value.zip,
      Facebook: this.reactiveForm.value.Facebook,
      LinkedIn: this.reactiveForm.value.LinkedIn,
      Twitter: this.reactiveForm.value.Twitter
    }
    console.log("data", data)
    this.service.create_user(data);
    this.route.navigate(['/purchase'])

  }
  cancel() {
    this.route.navigate(['/purchase']);
  }
}