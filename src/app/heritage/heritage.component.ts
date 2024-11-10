import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { TourService } from '../tour.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heritage',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './heritage.component.html',
  styleUrl: './heritage.component.css'
})
export class HeritageComponent {

  heritageSites = [
    {
      name: "Konark Sun Temple",
      location: "Konark",
      category: "Historical",
      description: "UNESCO World Heritage site, built in the 13th century. Famous for its massive chariot-shaped architecture with 24 wheels and intricate stone carvings.",
      rating: 4.8,
      price: 500,
      imagePath: "https://kalingatv.com/wp-content/uploads/2020/03/konark-temple.jpg",
      reviews: "250 Reviews"
  },
  {
      name: "Udayagiri and Khandagiri Caves",
      location: "Bhubaneswar",
      category: "Caves",
      description: "Ancient Jain caves dating back to the 1st century BCE. Features beautiful carvings and inscriptions depicting historical events.",
      rating: 4.5,
      price: 400,
      imagePath: "https://i.pinimg.com/originals/d3/b9/76/d3b9769959ee77986825c19c66fe4c92.jpg",
      reviews: "150 Reviews"
  },
  {
      name: "Rajarani Temple",
      location: "Bhubaneswar",
      category: "Historical",
      description: "An ancient temple famous for its distinctive architecture. It is a blend of the Kalinga style and features beautiful carvings.",
      rating: 4.7,
      price: 300,
      imagePath: "https://www.holidify.com/images/cmsuploads/compressed/Raja_Rani_Temple_-_A_different_angle_20180120211657.jpg",
      reviews: "180 Reviews"
  },
  {
      name: "Chilika Lake",
      location: "Ganjam",
      category: "Nature",
      description: "The largest coastal lagoon in India, home to various migratory birds and an important eco-tourism destination.",
      rating: 4.6,
      price: 600,
      imagePath: "https://img.staticmb.com/mbcontent/images/uploads/2022/9/chilika-lake.jpg",
      reviews: "220 Reviews"
  },
  {
      name: "Lingaraj Temple",
      location: "Bhubaneswar",
      category: "Temple",
      description: "A stunning example of Kalinga architecture, this temple is dedicated to Lord Shiva and is one of the oldest and largest temples in Odisha.",
      rating: 4.9,
      price: 350,
      imagePath: "https://static.toiimg.com/photo/msid-47158729,width-96,height-65.cms",
      reviews: "300 Reviews"
  },

  {
      name: "Chandragiri Hills",
      location: "Kalahandi",
      category: "Nature",
      description: "A picturesque hill station, known for its Tibetan settlements and panoramic views of the surrounding landscape.",
      rating: 4.6,
      price: 550,
      imagePath: "https://cdn.shopify.com/s/files/1/1657/2397/files/C4.jpg?v=1517717474",
      reviews: "140 Reviews"
  },

  {
      name: "Toshali Sands",
      location: "Puri",
      category: "Resort",
      description: "A luxurious eco-resort in Puri offering scenic views of the sea and a serene atmosphere for relaxation.",
      rating: 4.3,
      price: 3500,
      imagePath: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/ea/0c/a5/20160910-162332-largejpg.jpg?w=700&h=-1&s=1",
      reviews: "90 Reviews"
  },
  {
      name: "Rath Yatra in Puri",
      location: "Puri",
      category: "Cultural",
      description: "One of the biggest religious events in India, where Lord Jagannath’s chariot is pulled by thousands of devotees.",
      rating: 5.0,
      price: 1000,
      imagePath: "https://www.livemint.com/lm-img/img/2023/06/21/600x338/yatra_1687309359489_1687309359647.jpg",
      reviews: "650 Reviews"
  },
  
  {
      name: "Simlipal National Park",
      location: "Mayurbhanj",
      category: "Wildlife",
      description: "A rich biodiversity hotspot and a sanctuary for tigers, leopards, and elephants.",
      rating: 4.9,
      price: 1000,
      imagePath: "https://images.hindustantimes.com/img/2021/10/28/1600x900/subhadeep-dishant-k79MtOSivNs-unsplash_1635420354261_1635420377968.jpg",
      reviews: "320 Reviews"
  },
  {
      name: "Gopalpur Beach",
      location: "Ganjam",
      category: "Beach",
      description: "A quiet and picturesque beach with golden sand, surrounded by lush coconut trees.",
      rating: 4.7,
      price: 400,
      imagePath: "https://2.bp.blogspot.com/-G-mFAH4tmWM/WZAGuKsWjmI/AAAAAAAAAzg/mCrlPpiUbVwUlg8y-Jpj9ziIvls4TVQ7wCLcBGAs/s1600/2017060407014795c6a56.jpg",
      reviews: "220 Reviews"
  },
  {
      name: "Puri Beach",
      location: "Puri",
      category: "Beach",
      description: "A famous beach destination with its golden sands and the unique sight of fishermen at work.",
      rating: 4.8,
      price: 300,
      imagePath: "https://incredibleodisha.in/wp-content/uploads/2023/01/Things-to-do-in-Puri.jpeg",
      reviews: "400 Reviews"
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
  mybookingss(){
    this.router.navigate(['/mybooking'])
  }
  
  profile(){
    this.router.navigate(['/profile'])
  }

  bookPackage(packageDetails: any) {
    this.tourService.setPackageDetails(packageDetails);
    this.router.navigate(['/booking']);
  }
  login(){
        this.router.navigate(['/login']);
      }

}
