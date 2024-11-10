import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookingconform',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './bookingconform.component.html',
  styleUrl: './bookingconform.component.css'
})
export class BookingconformComponent implements OnInit {
  packageDetails: any;
  bookingDetails: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Retrieve the state passed from the booking component
    const navigation = this.router.getCurrentNavigation();
    

   
      console.error('No navigation state found');
      // Handle the case where no data was passed
      // You might want to redirect or show an error message
    }
  }
  
  


