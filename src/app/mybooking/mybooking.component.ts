import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../booking.service';
import { TourService } from '../tour.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mybooking',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './mybooking.component.html',
  styleUrl: './mybooking.component.css'
})
export class MybookingComponent {

  previousBookings = [
    { destination: "Puri", dates: "Jan 15 - Jan 18, 2024", guests: 2, reference: "ABC123" },
    { destination: "Bhubaneswar", dates: "Feb 20 - Feb 25, 2024", guests: 3, reference: "XYZ456" }
  ];

  currentBookings = [
    { destination: "Sambalpur", dates: "Nov 15 - Nov 20, 2024", guests: 4, reference: "LMN789" },
    
  ];

  constructor(private tourService: TourService, private router: Router, private userservice:UserService) {}


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
