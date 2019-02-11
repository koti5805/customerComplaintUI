import { Component, OnInit } from '@angular/core';
import { CustapictrlService } from '../../../services/custapictrl.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerUserData = {};
  cust_ind : any;
  constructor(private _auth: CustapictrlService, private _router: Router) { }

  ngOnInit() {
  }

  register() {
    console.log(this.registerUserData)
    this._auth.registerUser(this.registerUserData).subscribe((res) => {
        console.log(res);
        this._router.navigate(['/login']);
      }, (err) => {
        console.log(err)
      })    
  }
}
