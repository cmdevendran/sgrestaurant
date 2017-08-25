import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { MenuhomePage } from '../menuhome/menuhome';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
restid : any;
  constructor(public navCtrl: NavController, navParams: NavParams, public auth: AuthProvider, private af: AngularFireAuth) {


  this.af.auth.onAuthStateChanged(function(user) {
  if (!user) {
  this.navCtrl.setRoot(LoginPage);

  } else {

  console.log("user : "+user.uid);

  }
  });

}

next(el) {
    el.setFocus();
  }

  getMenuCat(){
  this.navCtrl.setRoot(MenuhomePage);
  }
}
