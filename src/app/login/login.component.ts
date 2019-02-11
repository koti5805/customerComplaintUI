import { Component, OnInit } from '@angular/core';
import { CustapictrlService } from '../../../services/custapictrl.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validationError : any;
  loginUserData = {};
  constructor(private _auth: CustapictrlService, private _router: Router) {
    
  }

  ngOnInit() {
  }

  loginUser() {
    console.log(this.loginUserData);
    this._auth.loginUser(this.loginUserData).subscribe((res) => {
        console.log(res);        
        localStorage.setItem('usrDtls', JSON.stringify(res.data));

        let token = {
          'token' : res.token
        }
        localStorage.setItem('token', JSON.stringify(token));
        this._router.navigate(['/complaintcell']);
      }, (err) => {
        console.log(err)
        if(err.status == 401) {
          this.validationError = true;
        }
      })    
  }

}
