import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:{email:string ; password: string}[] = [];
  private isLoggedIn = false;


  register(email:string, password:string){

    this. users. push({email, password});
    console.log('User registered:', email);
  }

  login(email: string, password:string): boolean{
    const user = this.users.find(u => u.email === email && u.password === password);
    return !!user;
    return this.isLoggedIn;
  }
  logout() {
    console.log('Logging out...');
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    console.log('User data removed from localStorage');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn; // Check if user is logged in
  }





  // bookPackage(details: any) {
  //   this.bookingDetails = details;
  // }

  
  }



