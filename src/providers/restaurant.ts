import { Injectable } from '@angular/core';
import { Http, Headers, HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import {AuthProvider} from '../providers/auth/auth';
import { nodeserver } from '../env/environment';



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
    return this.http.get(nodeserver+'/api/restaurant')
      .map(res => res.json());
  }
  //  get all Restaurants where user is marked with admin access

  getUserRestaurants() {
    console.log(this.auth.currentUser);
    return this.http.get(nodeserver+'/api/restaurant/' + this.auth.currentUser)
      .map(res => res.json());
  }




// add new Menu Category
  addMenuCategory(menuCat) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(nodeserver+'/api/restaurant/' + menuCat.id, JSON.stringify(menuCat), { headers: headers })
      .map(res => res.json());
  }



// Delete a Menu Category
  deleteMenuCategory(menuCat) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(nodeserver+'/api/restaurant/' + menuCat.id + '/' + menuCat.menuCat1, { headers: headers })
      .map(res => res.json());
  }

  // create new restaurant
    createNewRestaurant(newRest) {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post(nodeserver+'/api/restaurant/', JSON.stringify(newRest), { headers: headers })
        .map(res => res.json());
    }

// Create New Menu Item

  createNewMenuItem(newMenuItem) {

  console.log("Insite restaurant.ts New Menu Item"+newMenuItem);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(nodeserver+'/menuitem/menuitem/'+newMenuItem.id, JSON.stringify(newMenuItem), { headers: headers })
      .map(res => res.json());
  }

  getRestMenuCategory() {
  //  console.log(this.auth.currentUser);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(nodeserver+'/menuitem/servemenucat/59799c695119e91ea4ab113c',{ headers: headers })
      .map(res => res.json());
  }

  getRestMenuItems(passme){
  console.log("inside getRestMenuItems  : "+passme);
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post(nodeserver+'/menuitem/servemenuitems/'+passme.restid , JSON.stringify(passme), { headers: headers })
    .map(res => res.json());

  }

  placeNewOrder(Order){
  console.log("Inside PlaceNewOrder New Order"+ Order);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(nodeserver+'/api/order/neworder/'+Order.restaurant_id, JSON.stringify(Order), { headers: headers })
      .map(res => res.json());
  }

  getUserOrders(username){
  console.log("Inside get user Order"+ username.id);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(nodeserver+'/api/order/getmyorder/'+username.id, JSON.stringify(username), { headers: headers })
      .map(res => res.json());
  }


}
