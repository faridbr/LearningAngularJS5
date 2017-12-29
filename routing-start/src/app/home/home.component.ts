import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/Router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers(){
    //for testing after complex calculation(exemple)
    this.router.navigate(['/servers']);
  }

  onLoadServers2(id: number){
    //this.router.navigate(['/servers', id, 'edit'], {queryParams: {doJouJOu: 1}, fragment:'pointerIci'});
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {'allowEdit': 1}, fragment:'loading'});
  }

  onLoggin(){
    this.authService.login();
  }

  onLoggout(){
    this.authService.logout();
  }

}
