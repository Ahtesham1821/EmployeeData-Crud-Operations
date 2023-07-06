 import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private https:HttpClient) { }

  GetEmployeeData(){
    return this.https.get("http://localhost:37508/GetAllEmployee")
  }

  AddEmpData(data:any){
    return this.https.post("http://localhost:37508/AddEmployeeData",data)
  }

  DelEmpData(Id:any){
    return this.https.delete("http://localhost:37508/DeleteEmployeeData?EmployeeId="+Id)
  }

  UpdateEmpData(data:any){
    return this.https.put("http://localhost:37508/UpdateEmployeeData",data)
  }
  GetById(id:any){
    return this.https.get("http://localhost:37508/GetByEmployeeId?EmployeeId="+id)
  }
}
