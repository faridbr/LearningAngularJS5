import { Component, OnInit, OnDestroy  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/Router';

import { AuthService } from '../../shared/services/auth.service';
import { DataStorageService } from '../../shared/services/data-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {

  userIsAuthenticatedSubscription: Subscription;

  constructor(private authService: AuthService,private dataStorageService: DataStorageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.userIsAuthenticatedSubscription = this.authService.userIsAuthenticated.subscribe(
      (isAuthenticated: boolean)=>{
        if(isAuthenticated){
          this.dataStorageService.loadDataWithToken(this.authService.token);
          //this.router.navigate(['/recipes'], {relativeTo: this.route});
        }    
    });
  }

  onSignin(form: NgForm){
    const email = form.value.email;  
    const password = form.value.password;
    this.authService.signinUser(email, password);
  }

  ngOnDestroy(){
    this.userIsAuthenticatedSubscription.unsubscribe();
  }
}
