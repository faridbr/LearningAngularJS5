import { Component,  OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  users: {name: string, number :number}[];

  constructor(private usersService: UsersService){}

  ngOnInit(){
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
}
