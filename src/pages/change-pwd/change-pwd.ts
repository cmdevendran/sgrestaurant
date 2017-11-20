import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChangePwdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-change-pwd',
  templateUrl: 'change-pwd.html',
})
export class ChangePwdPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePwdPage');
  }
  gotoHome() {
    this.navCtrl.pop();
  }
  changePwd() {
    this.navCtrl.push(LoginPage);
  }
}
