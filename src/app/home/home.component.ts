import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private empservice:ServiceService){}




  value:any =[];

  empForm!: FormGroup;





  ngOnInit() {    

     

    let formbuild = new FormBuilder();

    this.empForm = formbuild.group({




      employeeName : new FormControl("", [Validators.required]),

      email : new FormControl("",[Validators.required]),

      dob :  new FormControl("",[Validators.required]),

      phone : new FormControl(),

      city : new FormControl("",[Validators.required])

     

    })

  }




  onFormSubmit(data:any)

  {

    this.empservice.AddEmpData(data).subscribe((res:any)=>

      {

        console.warn(res);

       

        alert("New Patient Added!");

        location.reload();      

      })

  }
}
