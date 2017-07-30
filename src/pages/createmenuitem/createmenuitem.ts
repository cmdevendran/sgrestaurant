import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RestProvider} from '../../providers/restaurant';
import {AuthProvider} from '../../providers/auth/auth';
import {AskProvider} from '../../providers/ask';
import {AlertController} from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the CreatemenuitemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-createmenuitem',
  templateUrl: 'createmenuitem.html',
})
export class CreatemenuitemPage {

menudatas: any[];
restid: string;
restname : string;
private vmenuForm : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private restData: RestProvider, private alertController: AlertController, private auth: AuthProvider) {
    this.restData.getUserRestaurants().subscribe(data => {
      this.restid = data._id;
      this.restname = data.name;
      this.menudatas = data.menucategory;
      console.log(data);
    });

    this.vmenuForm = this.formBuilder.group({
     vCatName : ['', Validators.required],
     vmenuName : ['', Validators.required],
     vmenuDesc : ['',Validators.required],
     vmenuPrice : ['',Validators.required],
     vmenuGST : ['']
   });

  }


  showAlert(data) {

this.menudatas.forEach((menudata) => { // foreach statement
   if(menudata._id==this.vmenuForm.value.vCatName){
      console.log("matches : "+ menudata.categoryname);
      this.mitem = menudata.categoryname;
    }
  });







    let alert = this.alertController.create({

      title: this.mitem ,
      subTitle: this.vmenuForm.value.vCatName,
      buttons: ['OK']
    });

    alert.present();
  }

mitem : string;
createMenuItem(){

  this.menudatas.forEach((menudata) => { // foreach statement
     if(menudata._id==this.vmenuForm.value.vCatName){
        //console.log("matches : "+ menudata.categoryname);
        this.mitem = menudata.categoryname;
      }
    });
  let menucategory = {
        id: this.restid,
        catid : this.vmenuForm.value.vCatName,
        catname : this.mitem,
        item_name: this.vmenuForm.value.vmenuName,
        menu_item_desc : this.vmenuForm.value.vmenuDesc,
        menu_item_img : "",
        addgst : this.vmenuForm.value.vmenuGST,
        item_price : this.vmenuForm.value.vmenuPrice,
        lastmodifiedby:this.auth.currentUser

      }


      this.restData.createNewMenuItem(menucategory).subscribe(data => {
        //this.menudatas = data.menucategory;

        let alert = this.alertController.create({

          title: "Menusubmit" ,
          subTitle: "success",
          buttons: ['OK']
        });

        alert.present();

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatemenuitemPage');
  }


}
