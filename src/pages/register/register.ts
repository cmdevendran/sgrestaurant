import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

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
              private firebasedb: AngularFireDatabase, private auth: AuthProvider) {

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
  this.register= this.firebasedb.list('/Restaurants');
  this.register.push(  {
  "name" : this.restaurantForm.value.restName,
  "Company Reg No" :this.restaurantForm.value.restRegNo,
  "Charge GST" : this.restaurantForm.value.restIsGST,
  "GST No" : this.restaurantForm.value.restGSTNo,
  "address" : this.restaurantForm.value.restAdd1,
  "address 2 " : this.restaurantForm.value.restAdd2,
  "block": this.restaurantForm.value.restBlk,
  "unit":this.restaurantForm.value.restUnit,
  "website":this.restaurantForm.value.restWebSite,
  "email": this.restaurantForm.value.restemail,
  "phone" : this.restaurantForm.value.restphone,
  "pincode" :this.restaurantForm.value.restPinCode,
  "State" : "SINGAPORE",

  "city" : "SINGAPORE",
  "Country" : "SINGAPORE",
  "createdby" : "",
  "createddate" : "",
  "lastmodifiedby" : this.auth.currentUser,
  "lastmodifieddate" : ""


  }
  )
  }


}
