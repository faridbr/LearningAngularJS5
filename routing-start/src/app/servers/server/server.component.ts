import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/Router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params["id"];  //+ to convert to number
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe((params: Params)=>{
      this.server = this.serversService.getServer(+params["id"]);
    });
  }

  onEditServer(){
    //this.router.navigate(['/servers',this.server.id,'edit'], {relativeTo: this.route});
    //this.router.navigate(['/servers', this.server.id, 'edit'], {queryParams: {'allowEdit': this.route.snapshot.queryParams['allowEdit']}, fragment:'loading'});
    //Or
    //to preserve the query parameters
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'}); //Or , preserveQueryParams: true
  }
}
