import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the VieworderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-vieworder',
  templateUrl: 'vieworder.html',
})
export class VieworderPage {

private order = {};
orderNo : string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private viewCtrl : ViewController) {
    this.order = navParams.get('order');
  console.log(this.order);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VieworderPage');
  }
  goBack() {

   this.viewCtrl.dismiss();
 }


}
