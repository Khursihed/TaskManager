import { Component,HostListener  } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthenticationService } from '../core/services/authentication.service';  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

   logininfo : any=[]; 
  public show_log_error =''; 

  logdata: FormGroup;   
  mentorRole: any;
  constructor(private fb: FormBuilder, private _authenticationService: AuthenticationService, private router: Router) { 
   
  this.logininfo = localStorage.getItem('logindata');
    this.logininfo = JSON.parse(this.logininfo);
    
    this.logdata = this.fb.group({
      Email: ['', [Validators.required]],
      Password: ['', [Validators.required]],
    }); 
  }
ngOnInIt(){
  this.logininfo = localStorage.getItem('logindata');
    this.logininfo = JSON.parse(this.logininfo);
}
  onLogin() {
    let Email = this.logdata.value.Email;
    let Password = this.logdata.value.Password;

    var obj = {
      "email": Email,
      "password": Password,
    };
    this._authenticationService.user_login(obj).subscribe(
      data => {
        if (data) {
          console.log(data);
          this.mentorRole = data;
          console.log(this.mentorRole);
        
          localStorage.setItem('logindata', JSON.stringify(data)); 
          this.router.navigate(['/admin/dashboard']); // Navigate using Angular's router
        } else {
          console.error('Response data is undefined');
          // Handle the case where data is undefined
        }
      },
      error => {
        console.error('Error during login:', error);
        // Handle the error
      }
    );
    
  }

  clearfunction(){
    this.show_log_error = '';  
  }

  gotoForgot(){
    window.location.href='#/forgetpassword'  
  } 

  @HostListener('document:keyup.enter', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.logdata.valid) {
      this.onLogin();
    }
  }

}