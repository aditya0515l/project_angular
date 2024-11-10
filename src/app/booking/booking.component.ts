import { Component } from '@angular/core';
import { TourService } from '../tour.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  
  
  packageDetails: any;
  bookingDetails = {
    name: '',
    email: '',
    date: '',
    guests: 1,
    phone: '',
    packageName: 'Package Name'  // Dynamically set based on the selected package
  };
booking =[];
  
  bookingService: any;

  constructor(private tourService: TourService , bookingService: BookingService, private router:Router ,  private userservice: UserService) {}

  onLogout() {
    this.userservice.logout(); // Call the logout method
    console.log('Logout action triggered');
    this.router.navigate(['/login'])
  }
  packagei(){
    this.router.navigate(['/packages'])
  }

  mybookingss(){
    this.router.navigate(['/mybooking'])
  }
  
  home(){
    this.router.navigate(['/home'])
  }

  
  profile(){
    this.router.navigate(['/profile'])
  }

  ngOnInit(): void {
    this.packageDetails = this.tourService.getPackageDetails();
  }

  bookTour() {
    
    this.router.navigate(['/bookingconform']);


    // Navigate to the booking confirmation page

  }
  

  
  
}
