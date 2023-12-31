import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  ngOnInit(){}

  navigate(route: string){
    this.router.navigate([route])
  }

  isActiveRoute(route: string): boolean {
    return this.router.isActive(route, true);
  }

  signOut(){
    if(this.authService.signOut()){
      this.navigate('sign-in');
    }
  }

}
