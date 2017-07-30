import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import {RestProvider} from '../../providers/restaurant';

import {AlertController} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

restaurantForm: FormGroup;
register : FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder,
              public restData : RestProvider,  private auth: AuthProvider) {

    this.restaurantForm = this.fb.group({
              'restName': ['',Validators.compose([Validators.required, Validators.minLength(4)])],
              'restRegNo': [''],
              'restIsGST': [''],
              'restGSTNo': [''],
              'restAdd1': [''],
              'restAdd2': [''],
              'restBlk': [''],
              'restUnit': [''],
              'restWebSite': [''],
              'restemail': [''],
              'restphone': [''],
              'restPinCode': ['',Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(6)])]




          });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  addRestaurant():void {
    console.log("within add Restaurants1");

    console.log("within add Restaurants");

    let vcreateRestaurant = {
      name: this.restaurantForm.value.restName,
      company_regno: this.restaurantForm.value.restRegNo,
      charge_gst: this.restaurantForm.value.restIsGST,
      gstNo: this.restaurantForm.value.restGSTNo,
      address: this.restaurantForm.value.restAdd1,
      address2: this.restaurantForm.value.restAdd2,
      block: this.restaurantForm.value.restBlk,
      unit: this.restaurantForm.value.restUnit,
      website: this.restaurantForm.value.restWebSite,
      email: this.restaurantForm.value.restemail,
      phone: this.restaurantForm.value.restphone,
      pincode: this.restaurantForm.value.restPinCode,
      state: "SINGAPORE",
      city: "SINGAPORE",
      country: "SINGAPORE",
      createdby: this.auth.currentUser,
      createddate: "",
      lastmodifiedby: this.auth.currentUser,
      lastmodifieddate: ""
    }
    this.restData.createNewRestaurant(vcreateRestaurant).subscribe(data => {
      //this.menudatas = data.menucategory;
    });
  }

}
