import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import {RestProvider} from '../../providers/restaurant';
import {MenuhomePage} from '../menuhome/menuhome';



/**
 * Generated class for the OrderPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

restid: string;
restname : string;
menuitems : any[];
gotPrevData : any;
private objNumber ={};



  constructor(public navCtrl: NavController, public navParams: NavParams, private restData: RestProvider, private viewCtrl : ViewController) {
  console.log("data passed to modal : "+ navParams.get('restid'));
  console.log("data passed to modal : "+ navParams.get('catid'));

    this.gotPrevData = navParams.get('order');
    console.log("data passed to modal : "+this.gotPrevData );


  let passme = {
  restid : navParams.get('restid'),
  catid : navParams.get('catid')
  };

  this.restData.getRestMenuItems(passme).subscribe(data=>{
  this.menuitems = data[0].menuitem;
  this.restid = data[0]._id;
console.log("data passed menuitem : "+ data);

  });

  if(this.gotPrevData){
  console.log("inside gotprevdata");
  this.objNumber = this.gotPrevData;

  }

  }



  private currentNumber = 0;
  private currNumber = [];


/**
if(this.navParams.get('order')){
 this.objNumber = this.navParams.get('order');
}
*/


private increment (_id) {
console.log("iddd "+_id);
//this.currentNumber++;

if(this.gotPrevData){
console.log("inside gotprevdata");
this.objNumber = this.gotPrevData;

}

if (this.objNumber.hasOwnProperty(_id)  ) {
  console.log("object exist : " + _id);
  var tempnumber = this.objNumber[_id];
  console.log(tempnumber);
  tempnumber++;
  console.log(tempnumber);
  this.objNumber[_id] = tempnumber;
  console.log(this.objNumber[_id]);
}
else {
  console.log("object does not exist : " + _id);
  var tempnumber1 = this.currentNumber;
  console.log(tempnumber1);
  tempnumber1++;
  console.log(tempnumber1);
this.objNumber[_id] = (tempnumber1);
console.log(this.objNumber);
};


console.log(this.objNumber);

}

private decrement(_id) {

if(this.gotPrevData){
console.log("inside gotprevdata");
this.objNumber = this.gotPrevData;

}

  if (this.objNumber.hasOwnProperty(_id)) {
    console.log("object exist : " + _id);
    var tempnumber = this.objNumber[_id];
    if (tempnumber > 0) {
      console.log(tempnumber);
      tempnumber--;
      console.log(tempnumber);
      this.objNumber[_id] = tempnumber;
      console.log(this.objNumber[_id]);
    }

  }

}

  goBack() {
  // let data = { 'foo': 'bar' };
//  this.navCtrl.push(MenuhomePage,this.objNumber);
   this.viewCtrl.dismiss(this.objNumber);
 }


  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
  }



}
