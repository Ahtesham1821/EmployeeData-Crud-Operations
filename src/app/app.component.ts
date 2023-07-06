import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project1';

  constructor(private GetData : ServiceService , private route: Router, private dialog:MatDialog){}

  data:any=[]
  displayedColumns: string[] = ['EmployeeName', 'Email', 'Dob', 'City', 'Action'];
  dataSource = new MatTableDataSource<any>;
 




  ngOnInit() {

    this.GetEmpData();

  }


  GetEmpData() {

    this.GetData.GetEmployeeData().subscribe((res:any) => {
      console.log(res)

     this.data=res.getallData
      this.dataSource=this.data
      console.log(this.data)

    })

    

  }
  openDialog() {

    this.dialog.open(HomeComponent, {

    width:'50%'

    })
  }

  DelEmpDat(Id :any){
    this.GetData.DelEmpData(Id).subscribe((res) =>{
      alert("Delete Employee Data");
      this.GetEmpData
    })
  }

  Update(tempid:any){
    debugger
    this.route.navigate([this.dialog.open(UpdateComponent)],{
    
      queryParams:{employeeId:tempid}
    }
    
    )
  
    console.warn(tempid)
  }
}
