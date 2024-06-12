import { Component,OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';
@Component({
  selector: 'app-header',
    templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { 
  public logininfo : any=[];  
  public stdprograminfo : any=[]; 
  public togglevalue: Number=0;

  constructor( private _authenticationService: AuthenticationService){
    this.logininfo = localStorage.getItem('logindata');
    this.logininfo = JSON.parse(this.logininfo)
  
  }
  
  ngOnInit(){ 
    // this.logininfo = localStorage.getItem('logindata');
    // this.logininfo = JSON.parse(this.logininfo)
    // console.log(this.logininfo)

  }   
  toggleDropdown(profileMenu: HTMLElement) {
    profileMenu.classList.toggle('show');
}
  logout(): void {
    this._authenticationService.logout();
  }

  
 menuchange(){

  const box = document.getElementById('appbody');

  if (this.togglevalue==0) {
     box?.classList.add('toggle-sidebar');
     this.togglevalue=1;
  }else{
    box?.classList.remove('toggle-sidebar');
    this.togglevalue=0;
  } 
 }

}