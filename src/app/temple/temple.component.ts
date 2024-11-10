import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TourService } from '../tour.service';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temple',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './temple.component.html',
  styleUrl: './temple.component.css'
})
export class TempleComponent {
  packages = [
    {
      name: 'Jagannath Temple',
      location: 'Puri',
      category: 'Religious',
      description: 'The iconic 12th-century temple dedicated to Lord Jagannath, famous for its annual Rath Yatra festival.',
      rating: 4.9,
      price: 1800,
      imagePath: 'https://api.blessingsonthenet.com/uploads/microsite/06bea7465399a962eff9af446bd6185b-1698745383440-Shree-Jagannath-Temple-Puri3.jpg',
      reviews: [
        { user: 'John Doe', comment: 'A spiritual experience!', rating: 5 },
        { user: 'Jane Smith', comment: 'Must-visit for history lovers.', rating: 4.5 }
      ]
    },
    {
      name: 'Lingaraj Temple',
      location: 'Bhubaneswar',
      category: 'Religious',
      description: 'The largest temple in Bhubaneswar, showcasing intricate Kalinga architecture.',
      rating: 4.8,
      price: 1600,
      imagePath: 'https://4.bp.blogspot.com/-dHoC0jgU4xU/WznWyXK1lyI/AAAAAAAABh0/YSDH9985g8smOkUYrbBCKVztlCMxyOR1wCLcBGAs/s1600/Bhubaneswar.jpg',
      reviews: [
        { user: 'Emily White', comment: 'Beautiful architecture!', rating: 4.8 }
      ]
    },
    {
      name: 'Sun Temple',
      location: 'Konark',
      category: 'Heritage',
      description: 'UNESCO World Heritage site shaped like a massive chariot with 24 wheels.',
      rating: 5,
      price: 2500,
      imagePath: 'https://th.bing.com/th/id/R.4ba46feee2e0c09b39e26d33fb77acb5?rik=wLguD8Kjza2BmA&riu=http%3a%2f%2fwww.dynamitenews.com%2fimages%2f2016%2f01%2f10%2fdn-dn-darshan-konark-sun-temple-odisha%2f1452429696_2415975117_97ef345413_o.jpg&ehk=dJlNGEu9Mvbyd3BAI9EvjlMPCEJAtfYHB9F%2bqRSh%2bIA%3d&risl=&pid=ImgRaw&r=0',
      reviews: [
        { user: 'David Green', comment: 'Breathtaking and magnificent!', rating: 5 }
      ]
    },
    {
      name: 'Maa Tarini Temple',
      location: 'Keonjhar',
      category: 'Religious',
      description: 'One of the most important Shakti Pithas in Odisha.',
      rating: 4.7,
      price: 1400,
      imagePath: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhHw1hoMtCyzK3KM40PXhVdziSSADEw041p2bKWFSnXmE5Cus-fYGMUY7cEzR23uSTSThpeMP0Sj-P4LWrxUE68MUKccgDb4xPTSqOMXAo43OVrdeW5qEiL3ivy0DAr8_9DEWFkhO7prg-_N_DvTGFrbFKp5noW25_p-6oay8Aj26if2isZK0D7hdd5/s737/maa-taratarini-temple-odisha-night-view.jpg',
      reviews: [
        { user: 'Sophia Brown', comment: 'Truly a serene place.', rating: 4.7 }
      ]
    },
    {
      name: 'Mukteshwar Temple',
      location: 'Bhubaneswar',
      category: 'Religious',
      description: 'Known for its exquisite gateway arch and 10th-century architecture.',
      rating: 4.6,
      price: 1200,
      imagePath: 'https://i.pinimg.com/originals/53/21/e6/5321e6ef6ad0e26c930d1043545f1d91.jpg',
      reviews: [
        { user: 'Liam Gray', comment: 'Unique and stunning.', rating: 4.6 }
      ]
    },
    {
      name: 'Rajarani Temple',
      location: 'Bhubaneswar',
      category: 'Heritage',
      description: 'Famous for its erotic sculptures and unique architectural style.',
      rating: 4.5,
      price: 1500,
      imagePath: 'https://www.suvidhayatri.com/uploads/23534_Puri%20Tour%20Package%20by%20www.suvidhayatri.com%20call%20@%208744992244%20(4).jpg',
      reviews: [
        { user: 'Ava Black', comment: 'Intricate carvings!', rating: 4.5 }
      ]
    },
    {
      name: 'Maa Biraja Temple',
      location: 'Jajpur',
      category: 'Religious',
      description: 'Ancient Shakti Pitha where Goddess Durga is worshipped.',
      rating: 4.6,
      price: 1300,
      imagePath: 'https://odishatour.in/wp-content/uploads/2021/08/Biraja-Temple-Jajpur1.jpg',
      reviews: [
        { user: 'Ethan Moore', comment: 'A place of power and peace.', rating: 4.6 }
      ]
    },
    {
      name: 'Gundicha Temple',
      location: 'Puri',
      category: 'Religious',
      description: 'Important temple in the annual Rath Yatra festival.',
      rating: 4.7,
      price: 1450,
      imagePath: 'https://media.tripinvites.com/places/puri/gundicha-temple/gundicha-temple-in-puri-featured.jpg',
      reviews: [
        { user: 'Mia Rose', comment: 'Wonderful experience.', rating: 4.7 }
      ]
    }
  ];

  constructor(private tourService: TourService, private router: Router, private userservice:UserService) {}

  packagei(){
    this.router.navigate(['/package'])
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
