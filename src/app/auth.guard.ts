import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'
import { CustapictrlService } from '../../services/custapictrl.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _auth: CustapictrlService,  private _router: Router) {

  }
  canActivate(): boolean {
    if(this._auth.loggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }
}
