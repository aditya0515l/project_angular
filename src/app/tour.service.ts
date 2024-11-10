import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TourService {
    private packageDetails: any;
  
    setPackageDetails(details: any) {
      this.packageDetails = details;
    }
  
    getPackageDetails() {
      return this.packageDetails;
    }
  constructor() { }
}
