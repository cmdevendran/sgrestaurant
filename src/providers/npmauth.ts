import { Injectable } from '@angular/core';
import { Http, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthProvider} from '../providers/auth/auth';
import { nodeserver } from '../env/environment';



/*
Uses for Node server authenticaiton



  Generated class for the npAuth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()

export class NpmauthProvider {

  constructor(public http: Http,
    public auth: AuthProvider) {

    //console.log('Hello TaskProvider Provider');
  }

  getAuthToken(user) {
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
    console.log("From auth.ts : "+ user);
    if(user){
    return this.http.post(nodeserver+'/authenticate/'+user,JSON.stringify(""), { headers: headers }).map(res => res.json());
      }
  }

  }
