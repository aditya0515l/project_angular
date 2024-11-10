import { Injectable } from '@angular/core';




@Injectable({
  providedIn: 'root'

  
  
  
})
export class BookingService {

 
  private packageDetails: any;
  private bookingDetails: any;

  setPackageDetails(packageDetails: any) {
    this.packageDetails = packageDetails;
  }

  setBookingDetails(bookingDetails: any) {
    this.bookingDetails = bookingDetails;
  }

  getPackageDetails() {
    return this.packageDetails;
  }

  getBookingDetails() {
    return this.bookingDetails;
  }

}
