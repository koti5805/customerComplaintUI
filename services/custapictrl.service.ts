import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustapictrlService {
  public options:any;
  public headers;
  // private _registerUrl = "http://localhost:3000/nodeapp/register";
  // private _loginUrl = "http://localhost:3000/nodeapp/login";

  

  private _base_url = 'http://localhost:3000/nodeapp/';
  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this._base_url + 'register/' , user )
  }

  loginUser(user) {
    return this.http.post<any>(this._base_url + 'login/' , user)
  }

  custCmplntLst(cust_id) {

    let token = localStorage.getItem('token');

    if(token) {
      let headers: HttpHeaders = new HttpHeaders();
      headers = headers.append('token', JSON.parse(token).token);

      return this.http.get<any>(this._base_url + 'custComplaints/'+ cust_id, {headers})
    } else {
      alert('Please Login');
    }

    
  }

  newCmplntLst(newCmplnt) {
    let token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('token', JSON.parse(token).token);

    return this.http.post<any>(this._base_url + 'createComplaint', newCmplnt, {headers})
  }
 
  CmplntLst(cmplnt_id) {
    let token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('token', JSON.parse(token).token);

    return this.http.get<any>(this._base_url + 'complaintDtls/'+ cmplnt_id,{headers})
  }

  createComment(comment) {
    
    let token = localStorage.getItem('token');
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('token', JSON.parse(token).token);

    return this.http.post<any>(this._base_url + 'createCmnt' , comment, {headers})
  }
  loggedIn() {
    return !!localStorage.getItem('token')
  }
}
