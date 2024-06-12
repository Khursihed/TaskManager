import { Component,HostListener  } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { AuthenticationService } from '../core/services/authentication.service';  
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

   logininfo : any=[]; 
  public show_log_error =''; 

  logdata: FormGroup;   
  mentorRole: any;
  constructor(private fb: FormBuilder, private _authenticationService: AuthenticationService, private router: Router) { 
   
  this.logininfo = localStorage.getItem('logindata');
    this.logininfo = JSON.parse(this.logininfo);
    
    this.logdata = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    }); 
  }
ngOnInIt(){
  this.logininfo = localStorage.getItem('logindata');
    this.logininfo = JSON.parse(this.logininfo);
}
  onLogin() {
    let Email = this.logdata.value.email;
    let Password = this.logdata.value.Password;
    let UserName = this.logdata.value.username;
    var obj = {
      "username": UserName,
      "password": Password,
      "email":Email,
    };
    console.log(obj)
    this._authenticationService.register(obj).subscribe(data => {
      console.log(data)
      this.mentorRole = data
      console.log(this.mentorRole)
     
        this.show_log_error = '';    
        localStorage.setItem('logindata',JSON.stringify(data)); 
        window.location.href='#/admin/dashboard'; 
      
    });
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