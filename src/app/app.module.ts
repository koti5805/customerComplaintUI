import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustapictrlService } from '../../services/custapictrl.service';
import { ComplaintcellComponent } from './complaintcell/complaintcell.component';
import { AuthGuard } from './auth.guard';
import { TrackcomplaintComponent } from './trackcomplaint/trackcomplaint.component';

const ROUTES: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'complaintcell', component: ComplaintcellComponent },
  { path: 'trackcomplaint', component: TrackcomplaintComponent },
  // otherwise redirect to home
    { path: '**', redirectTo: 'login' }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ComplaintcellComponent,
    TrackcomplaintComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CustapictrlService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

