import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App, ViewController   } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import {HomePage} from '../home/home';
import {LoginPage} from '../login/login';
import {Nav} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

@ViewChild(Nav) nav: Nav;

rootPage: any = HomePage;
displayname : string;
mobile : string;
uid : string;




  constructor(public navCtrl: NavController,
              public navParams: NavParams, public auth: AuthProvider,
              public viewCtrl: ViewController,
              private af: AngularFireAuth) {

              this.af.auth.onAuthStateChanged(function(user) {
              if (!user) {
              this.displayname = user.displayName;
              this.mobile = user.phoneNumber;
              this.uid= user.uid;

              } 
              });




  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  logout():void{
  this.navCtrl.setRoot(LoginPage);
  this.auth.logout();






  }

}
