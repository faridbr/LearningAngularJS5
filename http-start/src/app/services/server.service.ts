import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/Rx'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerService {

  constructor(private http: Http) { }

  storeServer(servers: any){
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    // return this.http.post(
    //                       'https://udemy-ng-ttp.firebaseio.com/myservers.json',
    //                       servers, 
    //                       {headers: headers}
    //                     );

    return this.http.put(
                          'https://udemy-ng-ttp.firebaseio.com/myservers.json',
                          servers, 
                          {headers: headers}
                        );
  }

  getServerts(){
    return this.http.get('https://udemy-ng-ttp.firebaseio.com/myservers.json')
    .map(
      (response: Response)=>{
        return response.json();
      }
    )
    .catch((error: Response)=>{
      console.log(error);
      return Observable.throw('something went wrong');
    });
  }

  getAppName(){
    return this.http.get('https://udemy-ng-ttp.firebaseio.com/myservers/0/appName.json')
    .map(
      (response: Response)=>{
        return response.json();
      }
    )
  }
}
