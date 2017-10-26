import { Component } from '@angular/core';
import {HomePage} from '../home/home';
import {OrderPage} from '../order/order';
import {VieworderPage} from '../vieworder/vieworder';
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

 openOrder(order){
     let profileModal = this.modalCtrl.create(VieworderPage, {order: order});
     profileModal.present();
     profileModal.onDidDismiss(data=>{

     console.log(data);
 });
 }

 stopOrder(myorder){
 let confirm = this.alertCtrl.create({
   title: 'HOLD ORDER?',
   message: 'Do you want the stop the order and approach Restaurant staff : ',
   buttons: [
     {
       text: 'No',
       handler: () => {
         console.log('Disagree clicked');
       }
     },
     {
       text: 'Yes',
       handler: () => {
         console.log('Agree clicked');
         let order = {
         id : myorder._id
         };
           this.restData.stopOrder(order).subscribe(data=>{
           if(data.ok==1){
           myorder.order_status="Hold";

           }

           console.log(order);
           });
       }
     }
   ]
 });
 confirm.present();

 }



  ionViewDidLoad() {
    console.log('ionViewDidLoad MyordersPage');
  }

}
