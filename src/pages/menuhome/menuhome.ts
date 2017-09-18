import { Component } from '@angular/core';
import {HomePage} from '../home/home';
import {OrderPage} from '../order/order';
import {CheckoutPage} from '../checkout/checkout';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {AlertController} from 'ionic-angular';
import {RestProvider} from '../../providers/restaurant';
import 'rxjs/add/operator/map';



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
menudatas: any[];
restid: string;
restname : string;
chargeGST : boolean;
fromOrder : any ;
orderItems = 0;
vmenuitems : any[];


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private restData: RestProvider, private alertController: AlertController, private auth: AuthProvider,
    public modalCtrl: ModalController, public toastCtrl: ToastController) {
    this.fromOrder = navParams.get("objNumber");

    console.log("order itesm : "+this.orderItems);
      console.log("objNumber from menuhome : "+ navParams.get('objNumber'));
      console.log("restid from form : "+navParams.get('id'));
      this.restData. getRestDetails(navParams.get('id')).subscribe(data => {
 // this.restData.getRestMenuCategory().subscribe(data => {
      this.restid = data._id;
      this.restname = data.name;
      this.menudatas = data.menucategory;
      this.vmenuitems = data.menuitem;
      this.chargeGST = data.charge_gst;
      console.log(data);
      console.log("menudatas : "+this.menudatas);
      console.log("menuitems : "+this.vmenuitems);
      console.log("change gst "  + data.charge_gst);

    });





  }



  goBack(){
  this.navCtrl.setRoot(HomePage);
  }


menuitems : any[];
  getMenuItem(menuCate) {

    console.log("inside menuhomets getmenuitem : " +menuCate + " id : " + this.restid);
    let passme = {
      catid: menuCate,
      id: this.restid
    }
    let profileModal = this.modalCtrl.create(OrderPage, 
      {restid : this.restid, name : this.restname, catid : menuCate , order : this.fromOrder},
      {showBackdrop: false});
    profileModal.present();
    profileModal.onDidDismiss(data=>{
    this.fromOrder = data;
    this.orderItems = Object.keys(this.fromOrder).length;
    console.log(this.fromOrder);

   });
  //
  }

  checkOut(){
  console.log("triggering checkout..");
  if(this.fromOrder){
  let profileModal = this.modalCtrl.create(CheckoutPage,  {restid : this.restid, menuitem :  this.vmenuitems, name : this.restname,  order : this.fromOrder, chargeGST : this.chargeGST});
  profileModal.present();
  }else{
  this.presentToast();
  }

}

presentToast() {
    let toast = this.toastCtrl.create({
    message: 'Please Select at least one item',
    showCloseButton: true,
    duration: 2000,
    cssClass: "toastClassName",
    position : 'middle'

    });

    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuhomePage');
  }

}
