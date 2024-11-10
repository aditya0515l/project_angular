import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  constructor( private router:Router, private userservice:UserService){}
  packagei(){
    this.router.navigate(['/packages'])
  }

  mybookingss(){
    this.router.navigate(['/mybooking'])
  }
  
  profile(){
    this.router.navigate(['/profile'])
  }


  onLogout() {
    this.userservice.logout(); // Call the logout method
    console.log('Logout action triggered');
    this.router.navigate(['/login'])
  }
    

home(){
  this.router.navigate(['/home'])
}

}
