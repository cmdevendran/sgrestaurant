import { Component } from '@angular/core';
import {HomePage} from '../home/home';
import {OrderPage} from '../order/order';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {AlertController} from 'ionic-angular';
import {RestProvider} from '../../providers/restaurant';
import 'rxjs/add/operator/map';


/**
 * Generated class for the CheckoutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {


menuitems :any;
restid: string;
name : string;
fromOrder = {} ;
checkoutOrder ={};
orderItems = 0;
revisedOrder : any [];
a=[];
totalAmount = 0;

constructor(public navCtrl: NavController, public navParams: NavParams,
  private restData: RestProvider, private alertCtrl : AlertController, private auth: AuthProvider,
  public modalCtrl: ModalController, private viewCtrl : ViewController) {

  this.fromOrder = navParams.get('order');
  this.name = navParams.get('name');
  this.restid = navParams.get('restid');
  this.menuitems = navParams.get('menuitem');


    console.log("name :"+this.name);
    console.log("restid :"+this.restid);
    console.log("order :"+this.fromOrder);
    console.log("menuitems:"+this.menuitems);


    for (var [key, value] of (<any>Object).entries(this.fromOrder)) {
    var tar =  this.menuitems.filter(function(v){ return v["_id"] == key; });
    console.log("dsfds "+tar);
    tar[0].order = value;
    this.totalAmount = this.totalAmount + (tar[0].item_price * tar[0].order);
    console.log(tar[0]);
    this.a.push(tar[0]);
      console.log(this.a);
       console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
    }



  /**
  this.a.forEach(function(element){
  //tempAmount = element.item_price * element.order;
    this.totalAmount = this.totalAmount + (element.item_price * element.order);
   });

  for (var [key, value] of (<any>Object).entries(tar[0])) {



     console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
  }
    this.menuitems.forEach(function(element) {
    console.log(element._id + ' '+element.item_name);
});

*/

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }



  goBack() {

   this.viewCtrl.dismiss(this.fromOrder);
 }

 placeOrder(){
 let order ={
 name : this.name,
 restaurant_id : this.restid,
 total_amount : this.totalAmount,
 createdby: this.auth.currentUser,
 createddate: "",
 lastmodifiedby: this.auth.currentUser,
 lastmodifieddate: "",
 orderdetails : this.a
 }
 this.restData.placeNewOrder(order).subscribe(data => {
 let alert = this.alertCtrl.create({

   title: "NewOrder",
   subTitle: "Order Created",
   buttons: ['OK']
 });

 alert.present();



 });
 }

 decrement(){

 }
 increment(){

 }
}
