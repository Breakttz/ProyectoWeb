import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/pages/login/login.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  username: string | null = null;
  
  private authSubscription!: Subscription; // Marcando como opcional

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.checkAuthentication();
    this.authSubscription = this.authService.getAuthenticationChanged().subscribe(
      (isAuthenticated: boolean) => {
        this.isAuthenticated = isAuthenticated;
        if (isAuthenticated) {
          this.username = this.authService.getUsername();
        } else {
          this.username = null;
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

  private checkAuthentication(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    if (this.isAuthenticated) {
      this.username = this.authService.getUsername();
    }
  }

  logout(): void {
    this.authService.logout();
    this.checkAuthentication();
  }
}
