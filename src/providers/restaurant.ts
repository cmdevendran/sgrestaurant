import { Injectable } from '@angular/core';
import { Http, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthProvider} from '../providers/auth/auth';



/*
import {AuthProvider} from '../providers/auth/auth';



  Generated class for the RestProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RestProvider {

  constructor(public http: Http,
  public auth: AuthProvider) {
    console.log('Hello TaskProvider Provider');
  }

  // get all Restaurants
  getRestaurants() {
      return this.http.get('http://localhost:3001/api/restaurant')
      .map(res => res.json());
      }
      //  get all Restaurants where user is marked with admin access

  getUserRestaurants() {
  console.log(this.auth.currentUser);
    return this.http.get('http://localhost:3001/api/restaurant/'+this.auth.currentUser)
      .map(res => res.json());
      }





  addMenuCategory(menuCat) {
    var headers = new Headers();
       headers.append('Content-Type', 'application/json');
       return this.http.post('http://localhost:3001/api/restaurant/'+menuCat.id, JSON.stringify(menuCat), {headers: headers})
           .map(res => res.json());
           }


  deleteMenuCategory(menuCat){

  var payload = JSON.stringify(menuCat);


  var headers = new Headers();
     headers.append('Content-Type', 'application/json');
    // headers.append('Content-Length', Buffer.byteLenght(payload));


    // return this.http.delete('http://localhost:3001/api/restaurant/'+menuCat.id).map(res => res.json());

    return this.http.post('http://localhost:3001/api/restaurant/'+menuCat.id+'/'+menuCat.menuCat1, {headers: headers})
        .map(res => res.json());
         }


  }
