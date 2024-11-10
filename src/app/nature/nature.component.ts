import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { TourService } from '../tour.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-nature',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './nature.component.html',
  styleUrl: './nature.component.css'
})

export class NatureComponent {
  natureDestinations = [
    {
      name: 'Deomali Peak',
      location: 'Koraput district',
      description: 'Highest mountain peak in Odisha at 1672m, offering panoramic views and trekking opportunities.',
      rating: 4.6,
      price: 1100,
      imagePath: 'https://i.ytimg.com/vi/LjaQV1MGhw4/maxresdefault.jpg',
      category: 'nature'
    },
    {
      name: 'Gandhamardan Hills',
      location: 'Bargarh & Balangir districts',
      description: 'Sacred hills known for medicinal plants and Buddhist heritage, perfect for nature walks.',
      rating: 4.7,
      price: 1000,
      imagePath: 'https://curlytales.com/wp-content/uploads/2021/09/EhFm3eMWAAAiaCf-1-1170x614.jpg',
      category: 'nature'
    },
    {
      name: 'Simlipal National Park',
      location: 'Mayurbhanj district',
      description: 'Vast wildlife sanctuary featuring rich biodiversity, waterfalls, and dense forests.',
      rating: 4.8,
      price: 1200,
      imagePath: 'https://roverstrip.com/wp-content/uploads/2021/07/simlipal-national-park-1024x682.jpg',
      category: 'nature'
    },
    {
      name: 'Bhitarkanika National Park',
      location: 'Kendrapara district',
      description: 'Second largest mangrove ecosystem in India, home to saltwater crocodiles and diverse bird species.',
      rating: 4.7,
      price: 1500,
      imagePath: 'https://th.bing.com/th/id/OIP.aTxeJdwaPiq0s04Ja_6_VgHaDd?rs=1&pid=ImgDetMain',
      category: 'nature'
    },
    {
      name: 'Satkosia Gorge',
      location: 'Angul district',
      description: 'Stunning gorge featuring the Mahanadi River, rich wildlife, and pristine forests.',
      rating: 4.5,
      price: 1300,
      imagePath: 'https://apps.odishatourism.gov.in/Application/uploadDocuments/Accommodation/Banner20181120_153042.jpg',
      category: 'nature'
    },
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
  mybookingss(){
    this.router.navigate(['/mybooking'])
  }
  
  profile(){
    this.router.navigate(['/profile'])
  }


  login() {
    console.log('Login functionality here');
  }


  ngOnInit(): void {
    // Initial logic if needed (like fetching data or setting defaults)
  }
  
  bookPackage(packageDetails: any) {
    this.tourService.setPackageDetails(packageDetails);
    this.router.navigate(['/booking']);
  }

}
