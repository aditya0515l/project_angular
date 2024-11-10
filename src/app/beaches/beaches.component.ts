import { Component } from '@angular/core';
import { TourService } from '../tour.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-beaches',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './beaches.component.html',
  styleUrl: './beaches.component.css'
})
export class BeachesComponent {
  destinations = [
    {
      name: 'Puri Beach',
      location: 'Puri',
      category: 'Beach',
      description: 'Famous golden sand beach with religious significance. Perfect for watching sunrise and cultural activities.',
      rating: 4.5,
      price: 2000,
      imagePath: 'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_734468563_20200312182246_20200312182307.png',
      reviews: 120
    },
    {
      name: 'Chandipur Beach',
      location: 'Balasore',
      category: 'Beach',
      description: 'Unique beach where the sea recedes up to 5 km during low tide. Known as the hide-and-seek beach.',
      rating: 4.2,
      price: 1800,
      imagePath: 'https://sandpebblestours.com/wp-content/uploads/2018/08/Odisha-beach-tour.jpg',
      reviews: 95
    },
    {
      name: 'Gopalpur Beach',
      location: 'Ganjam',
      category: 'Beach',
      description: 'Pristine beach with colonial charm. Perfect for water sports and watching fishing boats.',
      rating: 4.7,
      price: 2500,
      imagePath: 'https://apps.odishatourism.gov.in/Application/uploadDocuments/Accommodation/Thumbcount120190306_130623.jpg',
      reviews: 150
    },
    {
      name: 'Konark Beach',
      location: 'Konark',
      category: 'Beach',
      description: 'Beautiful beach near the famous Sun Temple. Known for its scenic beauty and clean shores.',
      rating: 4.3,
      price: 2200,
      imagePath: 'https://odishatour.in/wp-content/uploads/2020/11/Chandrabhaga-Sea-Beach-konark-puri6.jpg',
      reviews: 100
    },
    {
      name: 'Astaranga Beach',
      location: 'Puri',
      category: 'Beach',
      description: 'Famous for spectacular sunsets and fishing activities. Name means "colorful sunset" in Odia.',
      rating: 4.4,
      price: 2100,
      imagePath: 'https://th.bing.com/th/id/OIP.oYDal3_MoPiUFQfpJXQV_wHaFj?rs=1&pid=ImgDetMain',
      reviews: 110
    },
    {
      name: 'Paradeep Beach',
      location: 'Jagatsinghpur',
      category: 'Beach',
      description: 'Port city beach known for its scenic beauty and maritime activities. Popular picnic spot.',
      rating: 4.1,
      price: 1900,
      imagePath: 'https://media-cdn.tripadvisor.com/media/photo-c/1280x250/0d/69/e1/25/487926-455961627802458.jpg',
      reviews: 80
    },
    {
      name: 'Talasari Beach',
      location: 'Balasore',
      category: 'Beach',
      description: 'Pristine beach with palm trees and golden sand. Less crowded and perfect for peaceful visits.',
      rating: 4.6,
      price: 2300,
      imagePath: 'https://th.bing.com/th/id/OIP.SkAbIDk6_7hXijm1llZvGQAAAA?rs=1&pid=ImgDetMain',
      reviews: 130
    },
    {
      name: 'Ramchandi Beach',
      location: 'Puri',
      category: 'Beach',
      description: 'Serene beach near Konark, famous for water sports and the Ramchandi temple.',
      rating: 4.3,
      price: 2100,
      imagePath: 'https://www.gosahin.com/go/p/i/1565520836_ramchandi-beach-puri-2.jpg',
      reviews: 90
    },
    {
      name: 'Baliharachandi Beach',
      location: 'Puri',
      category: 'Beach',
      description: 'Pristine beach known for its silvery sand and peaceful environment. Great for photography.',
      rating: 4.2,
      price: 2000,
      imagePath: 'https://www.connectingtraveller.com/images/localtip/1630915067images%20-%202021-09-06T132634.828.jpeg',
      reviews: 95
    },
    {
      name: 'Balighai Beach',
      location: 'Puri',
      category: 'Beach',
      description: 'Quiet beach known for camel rides and red crabs. Perfect for peaceful evening walks.',
      rating: 4.0,
      price: 1800,
      imagePath: 'https://www.coastaltourism.in/wp-content/uploads/2013/11/balighai-beach-near-puri.jpg',
      reviews: 85
    },
    {
      name: 'Pati-Sonapur Beach',
      location: 'Ganjam',
      category: 'Beach',
      description: 'Hidden gem with pristine waters and golden sand. Known for its untouched beauty.',
      rating: 4.7,
      price: 2400,
      imagePath: 'https://i0.wp.com/www.odishaecoretreats.com/wp-content/uploads/2022/10/sonapur-beach4.jpg?fit=1280%2C958&ssl=1',
      reviews: 120
    },
    {
      name: 'Satapada Beach',
      location: 'Puri',
      category: 'Beach',
      description: 'Famous for Dolphins and Chilika Lake view. Perfect for nature and wildlife lovers.',
      rating: 4.5,
      price: 2200,
      imagePath: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/e7/d5/b4/beach-view-early-evening.jpg?w=400&h=300&s=1'
    }
  ];

  constructor(private tourService: TourService, private router: Router, private userservice:UserService) {}

  packagei(){
    this.router.navigate(['/packages'])
  }



  onLogout() {
    this.userservice.logout(); // Call the logout method
    console.log('Logout action triggered');
  }

  home(){
    this.router.navigate(['/home'])
  }

  temples(){
    this.router.navigate(['/temple']);
  }

  beaches(){
    this.router.navigate(['/beaches']);
  }

  wildlife(){
    this.router.navigate(['/wildlife'])
  }
  nature(){
    this.router.navigate(['/nature'])
  }
  heritage(){
    this.router.navigate(['/heritage'])
  }


  login() {
    console.log('Login functionality here');
  }
  mybookingss(){
    this.router.navigate(['/mybooking'])
  }
  
  profile(){
    this.router.navigate(['/profile'])
  }


  ngOnInit(): void {
    // Any additional initialization can go here
  }

  bookPackage(packageDetails: any) {
    this.tourService.setPackageDetails(packageDetails);
    this.router.navigate(['/booking']);
  }
}
