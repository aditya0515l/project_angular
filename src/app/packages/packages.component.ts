import { Component } from '@angular/core';
import { TourService } from '../tour.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './packages.component.html',
  styleUrl: './packages.component.css'
})
export class PackagesComponent {
  packages= [
    {
      id: 1,
      
      badge: 'Most Popular',
      name: 'Puri Golden Beach Retreat',
      description: '3 Days/2 Nights',
      category: 'Coastal',
      highlights: [
        'Jagannath Temple visit',
        'Golden beach sunset viewing',
        'Local seafood cuisine',
        'Sand art demonstration'
      ],
      imagePath:'https://res.cloudinary.com/local-tourism/images/c_scale,w_848,h_565,dpr_2/f_webp,q_auto/v1681626037/Jagannath/Jagannath.webp?_i=AA',
      

      reviews: [{comment: 'Amazing spiritual experience combined with beach relaxation. - Priya S.', rating: '⭐⭐⭐⭐',
        }
      ],
      price: '12,500',
      link: '#'
    
    },
    {
      id: 2,
      badge: 'Heritage',
      name: 'Konark Sun Circuit',
      duration: '2 Days/1 Night',
      category: 'Heritage',
      imagePath: 'https://th.bing.com/th/id/OIP.KsgrIIRcqzSdXLSgrS-G_wHaEM?w=311&h=180&c=7&r=0&o=5&pid=1.7g',
      highlights: [
        'Sun Temple UNESCO site',
        'Chandrabhaga beach',
        'Marine drive experience',
        'Handicraft shopping'
      ],
      reviews: [{Comment: 'The Sun Temple was breathtaking!- Rahul M.' , rating:'⭐⭐⭐⭐',}],
      price: '₹8,999',
      link: '#'
    },


    {
      id: 3,
      badge: 'Adventure',
      name: 'Similipal Wildlife Safari',
      duration: '4 Days/3 Nights',
      category: 'Wildlife',
      imagePath: 'https://th.bing.com/th/id/OIP.52W5Iwk6N7sxeiRP2yp9IgHaEK?w=293&h=180&c=7&r=0&o=5&pid=1.7',
      highlights: [
        'Jeep safari experience',
        'Waterfall trekking',
        'Flora and fauna exploration',
        'Nature photography'
      ],
      reviews: [{comment: 'A Thrilling wildlife feelings - Priya S.', rating: '⭐⭐⭐⭐',}],
      price: '₹15,000',
      link: '#'
    },
    {
      id: 4,
      badge: 'Tribal Culture',
      title: 'Odisha Tribal Tour',
      duration: '5 Days/4 Nights',
      category: 'Tribal Culture',
      imagePath:'https://www.thestatesman.com/wp-content/uploads/2021/03/e26a44f1e43f0425b584b1e36fdce370.jpg',
      highlights: [
        'Visit Bonda and Gadaba tribes',
        'Handicraft workshops',
        'Traditional dance performances',
        'Local village stay experience'
      ],
      reviews:[{Comment:'A culturaly encchering experience!- Rahul M.' , rating:'⭐⭐⭐⭐'},],
      review:{},
      price: '₹18,500',
      link: '#'
    },
    {
      id: 5,
      badge: 'Beach',
      title: 'Chandipur Hidden Beach Escape',
      duration: '2 Days/1 Night',
      category: 'Beach',
      highlights: [
        'Unique beach retreat',
        'Witness receding tides',
        'Relax by the shoreline',
        'Beach games and activities'
      ],
      imagePath:'https://th.bing.com/th/id/OIP.YFFTae8J64JsVJ3FJKDOKAHaEn?w=271&h=180&c=7&r=0&o=5&pid=1.7',
      reviews:[{Comment:'A hidden gem, truely unique"- Rahul M.' , rating:'⭐⭐⭐⭐'},],
      review: {
        stars: '⭐⭐⭐⭐',
        text: '"A hidden gem, truly unique!" - Rishi D.'
      },
      price: '₹7,000',
      link: '#'
    },
    {
      id: 6,
      badge: 'Heritage',
      title: 'Bhubaneswar Temple Circuit',
      duration: '3 Days/2 Nights',
      category: 'Heritage',
      highlights: [
        'Lingaraja Temple tour',
        'Mukteshwar Temple visit',
        'Guided city heritage walk',
        'Local cuisine tasting'
      ],
      imagePath:'https://images.odishatv.in/uploadimage/library/16_9/16_9_5/IMAGE_1660189954.jpg',
      reviews:[{Comment:'An eye-opening experience of ancient architecture!"- Veena R' , rating:'⭐⭐⭐⭐'},],
      review: {
        stars: '⭐⭐⭐⭐½',
        text: '"An eye-opening experience of ancient architecture!" - Veena R.'
      },
      price: '₹10,500',
      link: '#'
    },
    {
      id: 7,
      badge: 'Spiritual',
      title: 'Dhauli Peace Pagoda Tour',
      duration: '1 Day',
      category: 'Spiritual',
      imagePath:'https://updateodisha.com/wp-content/uploads/2022/10/623E942C-CF16-46BA-9DC9-6C074101B386.jpeg',
      highlights: [
        'Dhauli Shanti Stupa',
        'Asokan Edicts exploration',
        'Meditation sessions',
        'Local guide for insights'
      ],
      reviews:[{Comment:'A serene place with profound history. - Arjun T' , rating:'⭐⭐⭐⭐'},],
      review: {
        stars: '⭐⭐⭐⭐',
        text: '"A serene place with profound history." - Arjun T.'
      },
      price: '₹3,000',
      link: '#'
    },
    {
      id: 8,
      badge: 'Heritage',
      title: 'Cuttack Silver Filigree Tour',
      duration: '1 Day',
      category: 'Heritage',
      highlights: [
        'Visit to silver workshops',
        'Artisan interactions',
        'Explore Barabati Fort',
        'Shopping opportunity'
      ],
      imagePath:'https://th.bing.com/th/id/OIP.1s-umuDv4u5keslgecv_BgHaFT?rs=1&pid=ImgDetMain',
      reviews:[{Comment:'Great insight into Odisha\'s craft heritage! - Simran J.' , rating:'⭐⭐⭐⭐'},],
      review: {
        stars: '⭐⭐⭐⭐½',
        comment: '"Great insight into Odisha\'s craft heritage!" - Simran J.'
      },
      price: '₹4,500'
    },
    {
      id: 9,
      badge: 'Beach',
      title: 'Gopalpur Beach Holiday',
      duration: '3 Days/2 Nights',
      category: 'Beach',
      highlights: [
        'Beach relaxation and games',
        'Seafood dining experience',
        'Water sports',
        'Boat ride to Backwaters'
      ],
      imagePath:'https://www.go2india.in/orissa/images/b-gopalpur-beach.JPG',
      reviews:[{Comment:'The perfect getaway for beach lovers! - Simran J.' , rating:'⭐⭐⭐⭐'},],
      review: {
        stars: '⭐⭐⭐⭐⭐',
        comment: '"The perfect getaway for beach lovers!" - Priya N.'
      },
      price: '₹12,000'
    },
    {
      id: 10,
      badge: 'Adventure',
      title: 'Satkosia Gorge Adventure',
      duration: '3 Days/2 Nights',
      category: 'Adventure',
      highlights: [
        'Boat safari',
        'Camping near the gorge',
        'Guided trekking',
        'Wildlife spotting'
      ],
      imagePath:'https://bengaltourplans.com/wp-content/uploads/2020/07/satkosia-tour-plan.jpg',
      reviews:[{Comment:'A thrilling experience amidst nature. - Sameer K.' , rating:'⭐⭐⭐⭐'},],
      review: {
        stars: '⭐⭐⭐⭐½',
        comment: '"A thrilling experience amidst nature." - Sameer K.'
      },
      price: '₹13,500'
    },
    {
      id: 11,
      badge: 'Heritage',
      title: 'Chilika Lake Eco Tour',
      duration: '2 Days/1 Night',
      category: 'Heritage',
      highlights: [
        'Dolphin spotting boat tour',
        'Bird watching',
        'Overnight stay at eco-resort',
        'Nature walk'
      ],
      imagePath:'https://travelandtrekking.com/wp-content/uploads/2020/02/kalijai-temple-and-chilika-lake.jpeg',
      reviews:[{Comment:' paradise for nature enthusiasts! - Kavita L.' , rating:'⭐⭐⭐⭐'},],
      review: {
        stars: '⭐⭐⭐⭐',
        comment: '"A paradise for nature enthusiasts!" - Kavita L.'
      },
      price: '₹8,000'
    },
    {
      id: 12,
      badge: 'Spiritual',
      title: 'Lingaraja Temple Darshan',
      duration: '1 Day',
      category: 'Spiritual',
      imagePath:'https://img.traveltriangle.com/blog/wp-content/uploads/2019/10/Things-to-do-in-Cuttack-OG.jpg',
      highlights: [
        'Guided temple tour',
        'Aarti and rituals',
        'Cultural insights',
        'Traditional food experience'
      ],
      reviews:[{Comment:' A spiritual journey worth experiencing. - Anjali T.' , rating:'⭐⭐⭐⭐'},],
      review: {
        stars: '⭐⭐⭐⭐⭐',
        comment: '"A spiritual journey worth experiencing." - Anjali T.'
      },
      price: '₹5,000'
    },
    {
      id: 13,
      badge: 'Nature',
      title: 'Hirakud Dam Tour',
      duration: '1 Day',
      category: 'Nature',
      highlights: [
        'Dam and water reservoir visit',
        'Scenic viewpoints',
        'Boating experience',
        'Local history insights'
      ],
      imagePath:'https://www.postoast.com/wp-content/uploads/2017/10/about-Hirakud-dam.jpg',
      reviews:[{Comment:' Marvelous engineering and nature views. - Anjali T.' , rating:'⭐⭐⭐⭐'},],
      review: {
        stars: '⭐⭐⭐⭐',
        comment: '"Marvelous engineering and nature views." - Nishant D.'
      },
      price: '₹3,500'
    },
    {
      id: 14,
      badge: 'Adventure',
      title: 'Chandaka Elephant Sanctuary Trek',
      duration: '1 Day',
      category: 'Adventure',
      imagePath:'https://static.toiimg.com/photo/77456562/Elephants.jpg?width=748&resize=4',
      highlights: [
        'Forest trekking',
        'Elephant spotting',
        'Local flora and fauna',
        'Scenic picnic spots'
      ],
      reviews:[{Comment:' A thrilling jungle adventure!- Rohit G' , rating:'⭐⭐⭐⭐'},],
      review: {
        stars: '⭐⭐⭐⭐⭐',
        comment: '"A thrilling jungle adventure!" - Rohit G.'
      },
      price: '₹6,000'
    },
    {
      id: 15,
      badge: 'Beach',
      title: 'Puri Beach Relaxation',
      duration: '3 Days/2 Nights',
      category: 'Beach',
      imagePath:'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_734468563_20200312182246_20200312182307.png',
      highlights: [
        'Beachside stay',
        'Sunset views',
        'Shopping and food tour',
        'Ayurvedic massage'
      ],
      reviews: {
        stars: '⭐⭐⭐⭐⭐',
        comment: '"Perfect spot for relaxation and rejuvenation." - Meera S.'
      },
      price: '₹14,000'
    },
    
    {
      id: 17,
      badge: 'Wildlife',
      title: 'Similipal Wildlife Safari',
      duration: '3 Days/2 Nights',
      category: 'Wildlife',
      highlights: [
        'Jungle safari',
        'Tiger reserve visit',
        'Waterfalls and rivers',
        'Bird watching'
      ],
      reviews:[{Comment:' Great wilderness experience! - Shruti V.' , rating:'⭐⭐⭐⭐'},],
      review: {
        stars: '⭐⭐⭐⭐⭐',
        comment: '"Great wilderness experience!" - Karan P.'
      },
      price: '₹14,500'
    },
   



  ];
tourplan: any;
  




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
   

}
