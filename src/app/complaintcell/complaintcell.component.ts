import { Component, OnInit } from '@angular/core';
import { CustapictrlService } from '../../../services/custapictrl.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaintcell',
  templateUrl: './complaintcell.component.html',
  styleUrls: ['./complaintcell.component.css']
})
export class ComplaintcellComponent implements OnInit {
  shwNewComplaint: any;
  complaintform = {};
  user_dtl: any;
  cust_id: any;
  token = '';
  custCmplntLst: any;
  shwCCmplnts: any;
  shwNoRcrd: any;
  custCmplnt = false;
  agentFrm = false;
  
  constructor(private _auth: CustapictrlService, private _router: Router) { }

  ngOnInit() {
    this.token = JSON.parse(localStorage.getItem('token'));
    this.cust_id = JSON.parse(localStorage.getItem('usrDtls'));
    if (this.cust_id.cust_in == '1') {
      this.cust_id = this.cust_id.cust_id;
      
      this.custCmplnt = true;
      this.agentFrm = false;
    } else if (this.cust_id.agnt_in == '1') {
      this.cust_id = 'agnt_in';
      
      this.agentFrm = true;
      this.custCmplnt = false;
    }

    this._auth.custCmplntLst(this.cust_id).subscribe((res) => {
      this.custCmplntLst = res.data;
      if (this.custCmplntLst && this.custCmplntLst.length > 0) {
        this.shwCCmplnts = true;
        this.shwNoRcrd = false;
      } else {
        this.shwNoRcrd = true
      }
    }, (err) => {
      console.log(err)
    })
  }

  newComplaint() {
    this.shwNewComplaint = true;
  }

  cancelFrom() {
    this.shwNewComplaint = false;
  }

  createComplaint() {

    let data = JSON.parse(localStorage.getItem('usrDtls'));

    let cmplntData = {};

    if(data.cust_id) {

      cmplntData = {
        "complaintform" : this.complaintform,
        "cust_id" : data.cust_id
      }

    } else {
      cmplntData = {
        "complaintform" : this.complaintform,
        "agnt_id" : data.agnt_id
      }
    }

    this._auth.newCmplntLst(cmplntData).subscribe((res) => {
      alert('complaint created successfully');
      this.shwNewComplaint = false;
      this.ngOnInit();
    }, (err) => {
      console.log(err)
    })
  }

  edtCmplnt(cmplnt) {
    this.shwNewComplaint = true;
    this._router.navigate(['/trackcomplaint'], { queryParams: { complaint: cmplnt._id } });
  }

  logout() {
    localStorage.removeItem("token");
    this._router.navigate(['/login'])
  }
}
