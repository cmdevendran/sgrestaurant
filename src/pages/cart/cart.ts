import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ViewController  } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { RestProvider } from '../../providers/restaurant';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the CartPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  //viewCtrl: any;
  name: any;
  restid: any;
  private currentNumber = 0;
  private currNumber = [];
  private totalAmount = 0;
a = [];



  //{restid : this.restid, menuitem :  this.selectedItems, name : this.restname,  chargeGST : this.chargeGST});
  
  items=[];
gotPrevData : any;
objNumber = {};
chargeGST : boolean;
gstamount : number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, 
    private auth: AuthProvider, private restData: RestProvider,private alertCtrl : AlertController) {
this.items=navParams.get('menuitem');
this.gotPrevData=navParams.get('objNumber');
this.chargeGST = navParams.get('chargeGST');
this.restid = navParams.get('restid');
this.name = navParams.get('name');
console.log("prev data : "+this.gotPrevData);
if(this.gotPrevData){
  //console.log("inside gotprevdata");
  this.objNumber = this.gotPrevData;
  console.log("Oj no : "+this.objNumber);
  this. calculateTotalAmount();

  }
console.log(this.items);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }



  calculateTotalAmount(){
    this.totalAmount = 0;
    for (var [key, value] of (<any>Object).entries(this.objNumber)) {
      console.log("value from calc : "+ key +" : "+value);
      var tar =  this.items.filter(function(v){ return v["_id"] == key;
        });
        this.totalAmount = this.totalAmount+value*tar[0].item_price*1;
        console.log("total amount : "+this.totalAmount);
      console.log("dsfds "+JSON.stringify(tar) );
      //tar[0].order = value;
    
    
     // this.a.push(tar[0]);

      }
    }

    calcOrderDetails(){
      for (var [key, value] of (<any>Object).entries(this.objNumber)) {
        console.log("value from calc : "+ key +" : "+value);
        var tar =  this.items.filter(function(v){ return v["_id"] == key;
          });
         // this.totalAmount = this.totalAmount+value*tar[0].item_price*1;
          //console.log("total amount : "+this.totalAmount);
        console.log("dsfds "+JSON.stringify(tar) );
        tar[0].order = value;
      
      
       this.a.push(tar[0]);
  
        }
    }
  
    checkGST(){
      if(this.chargeGST==true && this.totalAmount!=0 ){
        console.log("within charge gust: "+ this.chargeGST);
        this.gstamount = this.totalAmount - (this.totalAmount/1.07);
      }
  
    }

    placeOrder(){
      this.calcOrderDetails();
      let order ={
      name : this.name,
      restaurant_id : this.restid,
      total_amount : this.totalAmount,
      createdby: this.auth.currentUser,
      createddate: "",
      status:"ordered",
      lastmodifiedby: this.auth.currentUser,
      lastmodifieddate: "",
      orderdetails : this.a
      }
      this.restData.placeNewOrder(order).subscribe(data => {
      let alert = this.alertCtrl.create({
     
        title: "Your Order is Placed",
        subTitle: "Order No : " +data.order_number,
        buttons: ['OK']
      });
     });
     this.dismiss();
     
 }

  private increment (item) {
    console.log("iddd "+item._id);
    //this.currentNumber++;
   
    if(this.gotPrevData){
    console.log("inside gotprevdata");
    this.objNumber = this.gotPrevData;
    console.log(this.objNumber);
    }
    
    if (this.objNumber.hasOwnProperty(item._id)  ) {
      console.log("object exist : " +item._id);
      var tempnumber = this.objNumber[item._id];
      console.log(tempnumber);
      tempnumber++;
     // console.log(tempnumber);
      this.objNumber[item._id] = tempnumber;
      console.log(this.objNumber[item._id]);

    }
    else {
      console.log("object does not exist : " +item._id);
      var tempnumber1 = this.currentNumber;
      console.log(tempnumber1);
      tempnumber1++;
      console.log(tempnumber1);
    this.objNumber[item._id] = (tempnumber1);
    console.log(this.objNumber);

    };
    
    
    //console.log(this.objNumber);
    this.calculateTotalAmount();
    
    }
    
    private decrement(item) {
    
    if(this.gotPrevData){
    console.log("inside gotprevdata");
    this.objNumber = this.gotPrevData;
    
    } 
    
      if (this.objNumber.hasOwnProperty(item._id)) {
        console.log("decrement object exist : " + item._id);
        var tempnumber = this.objNumber[item._id];
        if (tempnumber > 0) {
          console.log(tempnumber);
          tempnumber--;
          console.log(tempnumber);
          this.objNumber[item._id] = tempnumber;
          console.log("within decrement " +this.objNumber[item._id]);
 
          if (tempnumber===0){
            delete this.objNumber[item._id];
        
          }
        }
    
      }
      this.calculateTotalAmount();
    }
    dismiss() {
      //  let data = { 'foo': 'bar' };
      //this.viewCtrl.dismiss();
      this.navCtrl.setRoot(TabsPage);
      }


}