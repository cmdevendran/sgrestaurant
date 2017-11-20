import { ChangePwdPage } from './../change-pwd/change-pwd';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResetPwdPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-reset-pwd',
  templateUrl: 'reset-pwd.html',
})
export class ResetPwdPage {

  tabBarEle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabBarEle = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPwdPage');
  }
  ionViewWillEnter() {
    this.tabBarEle.style.display = 'none';
  }

  gotoHome() {
    this.navCtrl.pop();
  }
  changePwd() {
    this.navCtrl.push(ChangePwdPage);
  }

}
