import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
 
  
  userId: any;




  constructor(private empservice:ServiceService, private router: ActivatedRoute) { }




  value: any = [];

  empForm!: FormGroup;





  ngOnInit() {    

     

    let formbuild = new FormBuilder();

    this.empForm = formbuild.group({




      employeeId : new FormControl(),

      employeeName : new FormControl("", [Validators.required]),

      email : new FormControl("",[Validators.required]),

      dob :  new FormControl("",[Validators.required]),

      phone : new FormControl([Validators.required]),

      city : new FormControl("",[Validators.required])

     

    })

 

  debugger


    this.router.queryParams.subscribe(param => {

      this.userId = param['employeeId']

      console.warn(this.userId);

    })




    console.warn(this.userId);

    this.getDataById(this.userId);

  }




  onFormUpdate(data: any) {

    this.empservice.UpdateEmpData(data).subscribe((res: any) => {

      console.warn(res);




      alert("Successfully Updated!");

      location.reload();




    })

  }

  getDataById(id: any) {

    this.userId = id;

    this.empservice.GetById(this.userId).subscribe((res: any) => {
      this.empForm.patchValue(res.Specific
        );

      console.warn(res);




    });

  }
}
