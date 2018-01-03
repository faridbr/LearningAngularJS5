import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { DataStorageService } from '../../shared/data-storage.service';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers'; 
import * as authActions from "../../auth/store/auth.actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  
  authState: Observable<fromAuth.IState>;

  constructor(private dataStorageService: DataStorageService,
              private store: Store<fromApp.IAppState>) {
  }

  ngOnInit(){
    this.authState = this.store.select('auth')
  }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.store.dispatch(new authActions.Logout());
  }
}
