import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from '../../shared/services/logging.service';

@Injectable()
export class AccountsService {

  accounts =  [ {name: 'Master Account',status: 'active'},
                {name: 'Testaccount',status: 'inactive'},
                {name: 'Hidden Account',status: 'unknown'}
              ];

  statusUpdated: EventEmitter<string> = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) { }

  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChanged(status);
  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChanged(newStatus);
  }
}
