import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../shared/services/logging.service';
import { AccountsService } from '../shared/services/accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
})
export class NewAccountComponent {

  constructor(private loggingService: LoggingService, private accountsService: AccountsService){
    this.accountsService.statusUpdated.subscribe((status: string)=> alert('new status '+ status));
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
  }
}
