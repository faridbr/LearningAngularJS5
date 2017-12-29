import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/Router";
import { Observable } from "rxjs/Observable";
import { ServersService } from "./servers/servers.service";
import { Injectable } from "@angular/core";

export interface IServer {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServerResolver implements Resolve<IServer>{

    constructor(private serverService: ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IServer> | Promise<IServer> | IServer {
        return this.serverService.getServer(+route.params['id']);
    }
}