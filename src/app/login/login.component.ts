import { CommonModule } from '@angular/common';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {


  isLoginView:boolean=true;

  userregisterObj: any={
    username:'',
    password:'',
    email:'',
  }

  userlogin:any={
    email:'',
    password:'',
  }


  constructor(private router: Router){}
  // router= inject(Router);
  toggleForm() {
    this.isLoginView = !this.isLoginView;
  }
  

  onRegister(){
    const isLocalData = localStorage.getItem('angular18local');

    let users = isLocalData? JSON.parse(isLocalData):[];
    users.push(this.userregisterObj);
    localStorage.setItem('angular18local', JSON.stringify(users))
    // if(isLocalData !=null){
    //   const loocalArray = JSON.parse(isLocalData);
    //   loocalArray.push(this.userregisterObj);
    //   localStorage.setItem("angular18local",JSON.stringify(loocalArray))
       

    // }else{
    //   const localArray = [];
    //   localArray.push(this.userregisterObj);
    //   localStorage.setItem("angular18local",JSON.stringify(localArray))
    // }
    alert("registration sucessfull");
   
    this.isLoginView =false;
  
  }

  onlogin(){
    

    const isLocalData = localStorage.getItem('angular18local');
    if(isLocalData !=null){
      const users = JSON.parse(isLocalData);


      const isUserFound = users.find((m:any) => m.email == this.userlogin.email && m.password == this.userlogin.password);
     
      if (isUserFound) {
        this.router.navigate(['/home']);
      } else {
        // If no matching user is found, alert the user
        alert("Username or password is wrong");
      }
    }
      else {
        // If no users are stored in localStorage
        alert("No users found in the system. Please register.");
      }


  }
}
  
  


  // email: string = '';
  // password: string = '';

  // constructor(private userService: UserService, private router: Router) {}

  // onLogin() {
  //   if (this.userService.login(this.email, this.password)) {
  //     console.log('Login sucessfull');
  //     this.router.navigate(['/home'])
  //   }
  //   else{
  //     console.log('login failed');
  //   }
  //     this.router.navigate(['/']);
  //   } else {
  //     alert('Invalid login credentials');
  //   }
    

  // goToRegister() {
  //   this.router.navigate(['/register']);
  // }
// }
