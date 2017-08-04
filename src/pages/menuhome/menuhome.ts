import { Component } from '@angular/core';
import {HomePage} from '../home/home';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuhomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menuhome',
  templateUrl: 'menuhome.html',
})
export class MenuhomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goBack(){
  this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuhomePage');
  }

}
