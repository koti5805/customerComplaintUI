import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CustapictrlService } from '../../../services/custapictrl.service';
@Component({
  selector: 'app-trackcomplaint',
  templateUrl: './trackcomplaint.component.html',
  styleUrls: ['./trackcomplaint.component.css']
})
export class TrackcomplaintComponent implements OnInit {
  complaintform = {};
  public ShwCmntTxtx = false;
  comment: any;
  ShwCmnts: any;
  cmnts: any;
  public cust_id = {};
  cmnt : any;
  public agnt_id = {};
  constructor(private activatedRoute: ActivatedRoute, private _auth: CustapictrlService, private _router: Router) { }

  ngOnInit() {
    this.agnt_id = JSON.parse(localStorage.getItem('usrDtls'));
    console.log(this.agnt_id)
    this.activatedRoute.queryParams.subscribe(params => {
      const complaint = params['complaint'];
      this._auth.CmplntLst(complaint).subscribe((res) => {
        if (res.data[0].status == 'Active') {
          res.data[0].status = '0';
        } else if (res.data[0].status == 'Assigned') {
          res.data[0].status = '1';
        } else if (res.data[0].status == 'Processing') {
          res.data[0].status = '2';
        } else if (res.data[0].status == 'solved') {
          res.data[0].status = '3';
        } else {
          res.data[0].status = '4'
        }

        this.complaintform = res.data[0];

        console.log(this.complaintform);     

        this.cmnts = res.data[0].comments;
        if (this.cmnts && this.cmnts.length > 0) {
          this.ShwCmnts = true
        } else {
          this.ShwCmnts = false;
        }
      }, (err) => {
        console.log(err)
      })
    });
  }
  addComment() {
    this.ShwCmntTxtx = true;
  }

  SubmitComment() {
    let data = JSON.parse(localStorage.getItem('usrDtls'));
    let cmplntData = {};
    if(data.cust_id) {

      cmplntData = {
        "complaintform" : this.complaintform,
        "cust_id" : data.cust_id
      }

    } else {
      cmplntData = {
        "complaintform": this.complaintform,
        "agnt_id": data.agnt_id,
        "cmnt" : this.cmnt
      }
    }
      
    console.log(cmplntData);
    this._auth.createComment(cmplntData).subscribe((res) => {
      alert('submitted');
      this.ngOnInit();
      this.ShwCmntTxtx = false;
      this.ShwCmnts = true;
    }, (err) => {
      console.log(err)
    })
  }

  logout() {
    localStorage.removeItem("token");
    this._router.navigate(['/login'])
  }
}
