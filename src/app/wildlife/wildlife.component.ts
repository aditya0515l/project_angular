import { Component } from '@angular/core';
import { TourService } from '../tour.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wildlife',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './wildlife.component.html',
  styleUrl: './wildlife.component.css'
})
export class WildlifeComponent {

  wildlifeDestinations = [
    {
      name: 'Simlipal National Park',
      location: 'Mayurbhanj',
      description: 'Famous for its rich biodiversity including tigers and elephants.',
      imagePath: 'https://dctvacations.com/admin/include/upload/packages/62567df2eb8fbea6922ae-c9a3-4eb9-9fdf-d7d8b3bbce7c.jpg',
      rating:5,
      price: 2500,
      reviews: [
        { user: 'David Green', comment: 'Breathtaking and magnificent!', rating: 5 }
      ]
    },
    {
      name: 'Bhitarkanika National Park',
      location: 'Kendrapara',
      description: 'Known for its mangrove forests and saltwater crocodiles.',
      imagePath: 'https://ryasktourism.com/wp-content/uploads/2023/08/Bhitarkanika-National-Park-1024x640.webp'
    },
    {
      name: 'Chilika Wildlife Sanctuary',
      location: 'Ganjam',
      description: 'A haven for migratory birds and the largest coastal lagoon in India.',
      imagePath: 'https://recipeoftravel.com/wp-content/uploads/2021/12/wetlands-of-Chilika.jpg'
    },
    {
      name: 'Sunabeda Wildlife Sanctuary',
      location: 'Nuapada',
      description: 'Home to tigers, leopards, and various deer species.',
      imagePath: 'https://www.odishalifestyle.com/wp-content/uploads/2022/02/Sunabeda-wildlife-Sanctuary-1024x682.jpg'
    },
    {
      name: 'Tikarpada Wildlife Sanctuary',
      location: 'Angul',
      description: 'Nestled along the Mahanadi River with diverse flora and fauna.',
      imagePath: 'https://www.odishalifestyle.com/wp-content/uploads/2021/01/Tikarpada.jpg'
    },
    {
      name: 'Kotagarh Wildlife Sanctuary',
      location: 'Rayagada',
      description: 'Characterized by dense forests and rich wildlife.',
      imagePath: 'https://static.toiimg.com/photo/47988598/.jpg'
    },
    {
      name: 'Debrigarh Wildlife Sanctuary',
      location: 'Sambalpur',
      description: 'Home to the endangered four-horned antelope.',
      imagePath: 'https://static2.tripoto.com/media/filter/nl/img/257502/SpotDocument/1564476514_img_0654.jpg'
    },
    {
      name: 'Gahirmatha Marine Sanctuary',
      location: 'Kendrapara',
      description: 'The only turtle sanctuary in Odisha famous for nesting Olive Ridley turtles.',
      imagePath: 'https://d368ufu7xgcs86.cloudfront.net/1528-1537959433.jpg'
    },
    {
      name: 'Hadagarh Wildlife Sanctuary',
      location: 'Keonjhar',
      description: 'Known for its diverse avifauna and dense sal forests.',
      imagePath: 'https://live.staticflickr.com/2063/2256331967_0f857b096d.jpg'
    }
  ];



  ngOnInit(): void {
    // Any initialization logic here
  }


  constructor(private tourService: TourService, private router: Router, private userservice:UserService) {}

  packagei(){
    this.router.navigate(['/packages'])
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

  onLogout() {
    this.userservice.logout(); // Call the logout method
    console.log('Logout action triggered');
  }

  bookPackage(packageDetails: any) {
    this.tourService.setPackageDetails(packageDetails);
    this.router.navigate(['/booking']);
  }
}
