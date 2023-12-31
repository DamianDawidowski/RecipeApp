import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy{
isAuthenticated = false;
private userSub: Subscription;


  constructor(private router: Router, private dataStorageService: DataStorageService,
    private authService: AuthService ) { }
    

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !user ? false : true;
    });
    }
 

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }
  
    onFetchData() {
      this.dataStorageService.fetchRecipes().subscribe();
    }
  
    onLongout() {
      this.authService.logout();
    }


  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
  
}
 