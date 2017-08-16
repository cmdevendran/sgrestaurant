import { Component } from '@angular/core';
import {HomePage} from '../home/home';
import {OrderPage} from '../order/order';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {AlertController} from 'ionic-angular';
import {RestProvider} from '../../providers/restaurant';
import 'rxjs/add/operator/map';

/**
 * Generated class for the MyordersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-myorders',
  templateUrl: 'myorders.html',
})
export class MyordersPage {
user : string;
myorders : any[];




  constructor(public navCtrl: NavController, public navParams: NavParams,
    private restData: RestProvider, private alertCtrl : AlertController, private auth: AuthProvider,
    public modalCtrl: ModalController, private viewCtrl : ViewController) {
    console.log(this.auth.currentUser);
    let username = {
    id : this.auth.currentUser,
    };


    this.restData.getUserOrders(username).subscribe(data=>{
    this.myorders = data;
    console.log("myorders : " + this.myorders);
    });






  }
  goBack() {

   this.viewCtrl.dismiss();
 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyordersPage');
  }

}
