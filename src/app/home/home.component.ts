import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TourService } from '../tour.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
  export class HomeComponent {
    
    
    packages = [
      
      
    //     name: "Konark Sun Temple",
    //     location: "Puri District",
    //     category: "Heritage",
    //     imageUrl: "/api/placeholder/400/300",
    //     description: "UNESCO World Heritage site, this 13th-century marvel is shaped like a gigantic chariot with intricate carvings and architectural brilliance.",
    //     rating: 4.8,
    //     price:6000,
    //     ratingCount: 500,
    //     packages: [
    //         { name: 'Odisha Heritage Tour', price: 6000, plan: '3 Days / 2 Nights', description: 'Explore heritage sites like Konark Sun Temple.' }
    //     ]
    // },
    // {
    //     name: "Puri Beach",
    //     location: "Puri",
    //     category: "Beach",
    //     imageUrl: "/api/placeholder/400/300",
    //     description: "One of the finest beaches in Eastern India, known for its golden sands, spiritual significance, and spectacular sunrises.",
    //     rating: 4.5,
    //     price:5000,
    //     ratingCount: 800,
    //     packages: [
    //         { name: 'Odisha Beach Tour', price: 5000, plan: '3 Days / 2 Nights', description: 'Explore Odisha beaches.' }
    //     ]
    // },
    // {
    //     name: "Simlipal National Park",
    //     location: "Mayurbhanj District",
    //     category: "Wildlife",
    //     imageUrl: "/api/placeholder/400/300",
    //     description: "A biodiversity hotspot, Simlipal is home to a rich variety of flora and fauna, including tigers and elephants.",
    //     price: 7000,
    //     rating: 4.7,
    //     ratingCount: 650,
    //     packages: [
    //         { name: 'Odisha Wildlife Tour', price: 7000, plan: '4 Days / 3 Nights', description: 'Wildlife in national parks.' }
    //     ]
    // },
    // {
    //     name: "Chilika Lake",
    //     location: "Ganjam District",
    //     category: "Nature",
    //     imageUrl: "/api/placeholder/400/300",
    //     description: "Asia's largest brackish water lagoon, known for birdwatching, especially migratory birds, and its picturesque islands.",
    //     rating: 4.9,
    //     price:6500,
    //     ratingCount: 400,
    //     packages: [
    //         { name: 'Odisha Nature Tour', price: 6500, plan: '3 Days / 2 Nights', description: 'Discover Odisha’s natural beauty.' }
    //     ]
    // },
    // {
    //     name: "Dhauli Hill",
    //     location: "Bhubaneswar",
    //     category: "Heritage",
    //     imageUrl: "/api/placeholder/400/300",
    //     description: "Famous for its ancient rock edicts, the site marks the spot where Emperor Ashoka renounced violence after the Kalinga War.",
    //     rating: 4.7,
    //     price:6000,
    //     ratingCount: 350,
    //     packages: [
    //         { name: 'Odisha Heritage Tour', price: 6000, plan: '3 Days / 2 Nights', description: 'Explore heritage sites like Dhauli Hill.' }
    //     ]
    // },
    // {
    //     name: "Bhitarkanika Mangrove Reserve",
    //     location: "Kendrapara District",
    //     category: "Nature",
    //     imageUrl: "/api/placeholder/400/300",
    //     description: "A pristine mangrove forest reserve, Bhitarkanika is known for its rich flora and fauna, including saltwater crocodiles.",
    //     rating: 4.6,
    //     price:6500,
    //     ratingCount: 550,
    //     packages: [
    //         { name: 'Odisha Nature Tour', price: 6500, plan: '3 Days / 2 Nights', description: 'Explore natural reserves like Bhitarkanika.' }
    //     ]
    // },
    // {
    //     name: "Raghurajpur Village",
    //     location: "Puri District",
    //     category: "Heritage",
    //     imageUrl: "/api/placeholder/400/300",
    //     description: "A heritage village famous for its Pattachitra paintings and traditional Odisha crafts. An artist's hub.",
    //     rating: 4.5,
    //     price:6000,
    //     ratingCount: 200,
    //     packages: [
    //         { name: 'Odisha Heritage Tour', price: 6000, plan: '3 Days / 2 Nights', description: 'Visit artistic heritage sites like Raghurajpur.' }
    //     ]
    // },
    // {
    //     name: "Taptapani",
    //     location: "Ganjam District",
    //     category: "Nature",
    //     imageUrl: "/api/placeholder/400/300",
    //     description: "A beautiful hill station known for its hot springs, surrounded by scenic landscapes and dense forests.",
    //     rating: 4.6,
    //     price:6500,
    //     ratingCount: 250,
    //     packages: [
    //         { name: 'Odisha Nature Tour', price: 6500, plan: '3 Days / 2 Nights', description: 'Discover the natural beauty of Taptapani.' }
    //     ]
    // },
    // {
    //     name: "Nandankanan Zoo",
    //     location: "Bhubaneswar",
    //     category: "Wildlife",
    //     imageUrl: "/api/placeholder/400/300",
    //     description: "A zoological park and botanical garden with a focus on wildlife conservation. Home to rare white tigers and other species.",
    //     rating: 4.4,
    //     price:7000,
    //     ratingCount: 700,
    //     packages: [
    //         { name: 'Odisha Wildlife Tour', price: 7000, plan: '4 Days / 3 Nights', description: 'Visit national parks like Nandankanan.' }
    //     ]
    // },
    // {
    //     name: "Mandarmani Beach",
    //     location: "Medinipur District",
    //     category: "Beach",
    //     imageUrl: "/api/placeholder/400/300",
    //     description: "A pristine beach in West Bengal, famous for its tranquility, golden sands, and proximity to Odisha.",
    //     rating: 4.7,
    //     price:5000,
    //     ratingCount: 300,
    //     packages: [
    //         { name: 'Odisha Beach Tour', price: 5000, plan: '3 Days / 2 Nights', description: 'Explore the best beaches in Odisha.' }
    //     ]
    // },
    // {
    //     name: "Rajarani Temple",
    //     location: "Bhubaneswar",
    //     category: "Heritage",
    //     imageUrl: "/api/placeholder/400/300",
    //     description: "Known for its exquisite architecture and stunning sculptures, this ancient temple is dedicated to Lord Shiva.",
    //     rating: 4.8,
    //     price:6000,
    //     ratingCount: 400,
    //     packages: [
    //         { name: 'Odisha Heritage Tour', price: 6000, plan: '3 Days / 2 Nights', description: 'Visit Rajarani Temple and other heritage sites.' }
    //     ]
    // },
    // {
    //     name: "Udayagiri and Khandagiri Caves",
    //     location: "Bhubaneswar",
    //     category: "Heritage",
    //     imageUrl: "/api/placeholder/400/300",
    //     description: "These ancient Jain rock-cut caves are etched with religious carvings, offering a glimpse into Odisha's history and culture.",
    //     rating: 4.5,
    //     price:6000,
    //     ratingCount: 450,
    //     packages: [
    //         { name: 'Odisha Heritage Tour', price: 6000, plan: '3 Days / 2 Nights', description: 'Explore Udayagiri and Khandagiri Caves.' }
    //     ]
    // },
    // {
    //     name: "Khandagiri Hills",
    //     location: "Bhubaneswar",
    //     category: "Nature",
    //     imageUrl: "/api/placeholder/400/300",
    //     description: "A serene hilltop offering stunning views of the city, as well as historic caves and ancient Jain inscriptions.",
    //     rating: 4.3,
    //     price:6500,
    //     ratingCount: 350,
    //     packages: [
    //         { name: 'Odisha Nature Tour', price: 6500, plan: '3 Days / 2 Nights', description: 'Hike through scenic hills like Khandagiri.' }
    //     ]
    //   },
   
    {
      name: "Konark Sun Temple",
      location: "Puri District",
      category: "Heritage",
      description: "UNESCO World Heritage site, this 13th-century marvel is shaped like a gigantic chariot with intricate carvings and architectural brilliance.",
      rating: 4.8,
      tourPlan: "A full-day tour to the Konark Sun Temple with guided tours to explore the history and architecture.",
      bookingLink: "#",
      price:6000,
     imagePath: 'https://th.bing.com/th/id/R.070ff14397cd2008d74e421c944e0d8c?rik=L%2f9gMLiTVgCaow&riu=http%3a%2f%2fwww.ancient-origins.net%2fsites%2fdefault%2ffiles%2ffield%2fimage%2fthe-Konark-Sun-Temple-Revealed.jpg&ehk=7ZzS1QE4000rKKxe%2f1pn%2fH9vAtmEvdmj0RhzQ7QFfAU%3d&risl=&pid=ImgRaw&r=0',

      reviews: [
        { user: "John Doe", comment: "Amazing historical site, breathtaking architecture.", rating: 5 },
        { user: "Alice Smith", comment: "A must-see in Odisha, the carvings are exceptional.", rating: 5 }
      ],
  
    },
    {
      name: "Puri Beach",
      location: "Puri",
      category: "Beach",
      description: "One of the finest beaches in Eastern India, known for its golden sands, spiritual significance, and spectacular sunrises.",
      rating: 4.5,
      price:5000,
      imagePath : "https://incredibleodisha.in/wp-content/uploads/2023/01/Things-to-do-in-Puri.jpeg",
      reviews: [
        { user: "Sarah Williams", comment: "A serene experience, great for sunrise watching.", rating: 4 },
        { user: "Michael Brown", comment: "The beach is lovely, but gets crowded during the season.", rating: 4 }
      ],
      tourPlan: "Relax at the beach, enjoy water sports, and a guided tour of the nearby temples and attractions.",
      bookingLink: "#"
    },
    {
      name: "Simlipal National Park",
      location: "Mayurbhanj District",
      category: "Wildlife",
      description: "A biodiversity hotspot, Simlipal is home to a rich variety of flora and fauna, including tigers and elephants.",
      rating: 4.7,
      price:4500,
      imagePath : "https://i1.wp.com/orissadiary.com/wp-content/uploads/2019/11/DkFEiGbV4AELjK3.jpg?fit=680%2C488&ssl=1 ",
      reviews: [
        { user: "David Green", comment: "Incredible wildlife experience, saw tigers and elephants up close!", rating: 5 },
        { user: "Emily Clark", comment: "A beautiful park, but the weather can be hot in the summer.", rating: 4 }
      ],
      tourPlan: "A guided safari tour with options for trekking and exploring the park's rich flora and fauna.",
      bookingLink: "#"
    },
    {
      name: "Chilika Lake",
      location: "Ganjam District",
      category: "Nature",
      description: "Asia's largest brackish water lagoon, known for birdwatching, especially migratory birds, and its picturesque islands.",
      rating: 4.9,
      price:6000,
      imagePath: "https://d1ttqxosekmk9r.cloudfront.net/posts/argusnews-chilika-fbfcd152-220a-46b8-8dc7-41ca744e9c8e.jpg",
      reviews: [
        { user: "Rachel Lee", comment: "Amazing for birdwatching and the boat ride was peaceful.", rating: 5 },
        { user: "Chris Taylor", comment: "A perfect place to relax, the islands are beautiful.", rating: 5 }
      ],
      tourPlan: "A boat ride around the lake, with a visit to the bird sanctuary and nearby islands.",
      bookingLink: "#"
    },
    {
      name: "Dhauli Hill",
      location: "Bhubaneswar",
      category: "Heritage",
      description: "Famous for its ancient rock edicts, the site marks the spot where Emperor Ashoka renounced violence after the Kalinga War.",
      rating: 4.7,
      price:5000,
      imagePath: "https://tourmyodisha.com/wp-content/uploads/2021/12/dhauli-600x563.jpg",
      
      reviews: [
        { user: "James White", comment: "A serene and historic site, definitely worth a visit.", rating: 5 },
        { user: "Sophia Clark", comment: "The rock carvings are fascinating and the view is great.", rating: 4 }
      ],
      tourPlan: "Visit the Dhauli Hill, see the Ashoka rock edicts, and explore the surroundings.",
      bookingLink: "#"
    },
    {
      name: "Bhitarkanika Mangrove Reserve",
      location: "Kendrapara District",
      category: "Nature",
      description: "A pristine mangrove forest reserve, Bhitarkanika is known for its rich flora and fauna, including saltwater crocodiles.",
      rating: 4.6,
      price:6000,
      imagePath: "https://thumbs.dreamstime.com/b/sunrise-view-river-bank-stunning-view-sunrise-river-calm-water-fishing-boat-green-trees-229585941.jpg",
      reviews: [
        { user: "Olivia Roberts", comment: "A peaceful and unique nature reserve, the mangrove forests are beautiful.", rating: 5 },
        { user: "Liam Martin", comment: "Great for nature lovers, but the boat rides can be long.", rating: 4 }
      ],
      tourPlan: "Explore the mangrove reserve with a boat tour, observe wildlife, and visit the crocodile sanctuary.",
      bookingLink: "#"
    },
    {
      name: "Raghurajpur Village",
      location: "Puri District",
      category: "Heritage",
      description: "A heritage village famous for its Pattachitra paintings and traditional Odisha crafts. An artist's hub.",
      rating: 4.5,
      price:5000,
      imagePath: "https://www.goingplaceswithanwesha.com/wp-content/uploads/2020/01/IMG_20191009_115122-01.jpeg",
      reviews: [
        { user: "Sophia Turner", comment: "An amazing experience to see traditional Pattachitra art being created.", rating: 5 },
        { user: "Daniel Lewis", comment: "Very cultural, great place to buy souvenirs.", rating: 4 }
      ],
      tourPlan: "A walking tour of the village to explore the crafts, with an opportunity to interact with the local artists.",
      bookingLink: "#"
    },
    {
      name: "Taptapani",
      location: "Ganjam District",
      category: "Nature",
      description: "A beautiful hill station known for its hot springs, surrounded by scenic landscapes and dense forests.",
      rating: 4.6,
      price:4000,
      imagePath: "https://www.indiantempletour.com/wp-content/uploads/2023/05/ORRISA14_Taptapani_FI.jpg",
      reviews: [
        { user: "Charlotte White", comment: "A hidden gem, the hot springs are amazing to relax in.", rating: 5 },
        { user: "Matthew Harris", comment: "Scenic and peaceful, perfect for a weekend getaway.", rating: 4 }
      ],
      tourPlan: "Relax in the hot springs, enjoy the scenic views, and explore the surrounding forests.",
      bookingLink: "#"
    },
    {
      name: "Nandankanan Zoo",
      location: "Bhubaneswar",
      category: "Wildlife",
      description: "A zoological park and botanical garden with a focus on wildlife conservation. Home to rare white tigers and other species.",
      rating: 4.4,
      price:7000,
      imagePath: "https://nandankanan.org/images/banner/banner_1604729716.jpg",
      reviews: [
        { user: "William Harris", comment: "A great zoo with a lot of species, especially the white tigers.", rating: 4 },
        { user: "Mia Allen", comment: "Beautiful zoo, but the animals could be given more space.", rating: 4 }
      ],
      tourPlan: "Explore the zoo with a guided tour to learn about the conservation efforts and see the animals.",
      bookingLink: "#"
    },
    {
      name: "deomali",
      location: "Koraput District",
      category: "nature",
      description: "Deomali Mountain is the highest peak in Odisha, with an elevation of about 1,672 meters (5,486 ft) above sea level. It offers breathtaking views of the surrounding landscape, eco-tourism, and trekking, including lush green valleys , forests and distinct hills.",
      rating: 4.7,
      price:8000,
      imagePath: "https://i.ytimg.com/vi/eFG1PSvxduI/maxresdefault.jpg",
      reviews: [
        { user: "Grace Johnson", comment: "A calm and peaceful beach, perfect for a weekend escape.", rating: 5 },
        { user: "Lucas Martinez", comment: "Beautiful beach, but can get crowded during holidays.", rating: 4 }
      ],
      tourPlan: "Relax on the beach, enjoy the sunset, and take a stroll along the shoreline.",
      bookingLink: "#"
    },


    {
      name: "Rajarani Temple",
      location: "Bhubaneswar",
      category: "Heritage",
      description: "Known for its exquisite architecture and stunning sculptures, this ancient temple is dedicated to Lord Shiva.",
      rating: 4.8,
      price:4500,
      imagePath: "https://th.bing.com/th/id/OIP.geNKaa3kCKF_h3A3n8C5TwHaE7?rs=1&pid=ImgDetMain",
      reviews: [
        { user: "Ethan Scott", comment: "The architecture is spectacular, definitely worth visiting.", rating: 5 },
        { user: "Isabella King", comment: "Such a peaceful temple, with beautiful carvings and sculptures.", rating: 5 }
      ],
      tourPlan: "A guided tour of the temple to explore the stunning architecture and history.",
      bookingLink: "#"
    },
    {
      name: "Udayagiri and Khandagiri Caves",
      location: "Bhubaneswar",
      category: "Heritage",
      description: "These ancient Jain rock-cut caves are etched with religious carvings, offering a glimpse into Odisha's history and culture.",
      rating: 4.5,
      price:5500,
      imagePath: "https://cimages1.touristlink.com/repository/U/D/A/Y/A/G/I/R/udayagiri.jpg",
      reviews: [
        { user: "Amelia Brooks", comment: "A great historical site, with fascinating carvings.", rating: 5 },
        { user: "Henry Harris", comment: "The caves are impressive but could be better maintained.", rating: 4 }
      ],
      tourPlan: "Explore the caves with a guide and learn about their significance in Jain culture.",
      bookingLink: "#"
    },
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
  
    bookPackage(packageDetails: any) {
      this.tourService.setPackageDetails(packageDetails);
      this.router.navigate(['/booking']);
    }
    
  
      
}
