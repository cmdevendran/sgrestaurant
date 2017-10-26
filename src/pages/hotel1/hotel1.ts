import { Component } from '@angular/core';
import {HomePage} from '../home/home';
import {OrderPage} from '../order/order';
import {CheckoutPage} from '../checkout/checkout';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {AlertController} from 'ionic-angular';
import {RestProvider} from '../../providers/restaurant';
import 'rxjs/add/operator/map';
import { CartPage } from '../cart/cart';

/**
 * Generated class for the Hotel1Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-hotel1',
  templateUrl: 'hotel1.html',
})
export class Hotel1Page {
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
        this.getMenuList(this.menudatas[0]._id)
        console.log(data);
        console.log("menudatas : "+this.menudatas);
        console.log("menuitems : "+this.vmenuitems);
        console.log("change gst "  + data.charge_gst);
  
      });
  
  
  
  
  
    }
  
  
  
    goBack(){
    this.navCtrl.setRoot(HomePage);
    }
  
 private menuobj = {};

consMenuitem = [];
  getMenuList(menucat){

    this.consMenuitem = [];
    this.vmenuitems.forEach(element => {
      if(element.catid===menucat)

      this.consMenuitem.push(element);
    
    });
    console.log(this.consMenuitem);

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
  
    custom(){}

    // adds the items selected menuitems
itemNumbers = 0;
objNumber = {};
selectedItems = [];
selectedids =[];
 totalamount =0;
 //totalamount : number;
 price : number;

private currentNumber = 0;

    addOrder(menuitem){
      if (this.objNumber.hasOwnProperty(menuitem._id)  ) {
        console.log("object exist : " + menuitem._id);
      /**  var tempnumber = this.objNumber[menuitem._id];
        console.log(tempnumber);
        tempnumber++;
        console.log(tempnumber);
        this.objNumber[menuitem._id] = tempnumber;
        console.log(this.objNumber[menuitem._id]);*/
      }
      else {
        console.log("object does not exist : " +menuitem._id);
        var tempnumber1 = this.currentNumber;
        console.log(tempnumber1);
        tempnumber1++;
        console.log(tempnumber1);
      this.objNumber[menuitem._id] = (tempnumber1);
      console.log(this.objNumber);
        this.selectedItems.push(menuitem);
        //this.price = menuitem.item_price.toFixed(2)*1;
        this.totalamount=this.totalamount+menuitem.item_price*1;

       // this.totalamount= this.totalamount+ parseInt(menuitem.item_price).toFixed(2);
        this.itemNumbers=this.itemNumbers++
      };

console.log("objNumber : "+JSON.stringify(this.objNumber));

      console.log("Add order"+menuitem._id);
      console.log(this.selectedItems);
    }

    goCart(){
      let profileModal = this.modalCtrl.create(CartPage,  {restid : this.restid, menuitem :  this.selectedItems, name : this.restname,  chargeGST : this.chargeGST, objNumber : this.objNumber});
      profileModal.present();
    }

  }
  