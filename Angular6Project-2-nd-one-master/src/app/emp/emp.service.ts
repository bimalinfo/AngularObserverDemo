import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Emp } from './emp';

enum serviceUrl{
  saveBaseUrl = '/api/emps/create',
  getBaseUrl = '/api/emps'
}

@Injectable({
  providedIn: 'root'
})


export class EmpService {

  constructor(private http: HttpClient) { }
  //saveBaseUrl: string = '/api/emps/create';
  //getBaseUrl: string = '/api/emps';

  createEmployee(emp: Emp) {
  	//return this.http.post(this.saveBaseUrl, emp);
    return this.http.post(serviceUrl.saveBaseUrl, emp);
  }
  
  getEmployees() {
  	//return this.http.get<Emp[]>(this.getBaseUrl);
   return this.http.get<Emp[]>(serviceUrl.getBaseUrl);
  }
}
