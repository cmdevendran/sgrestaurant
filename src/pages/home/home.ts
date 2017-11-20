import { Component } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { MenuhomePage } from '../menuhome/menuhome';
import { AngularFireAuth } from 'angularfire2/auth';
import {RestProvider} from '../../providers/restaurant';
import {EnterPinPage} from '../enter-pin/enter-pin';
//import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import { Hotel1Page } from '../hotel1/hotel1';
import { FavResPage } from '../fav-res/fav-res';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  EnterPinPage = EnterPinPage;
restid : any;
scanData : {};
encodeData : string ;
encodedData : {} ;
options : BarcodeScannerOptions;

  constructor(public navCtrl: NavController, navParams: NavParams, public auth: AuthProvider, 
    private restData: RestProvider,private af: AngularFireAuth,private barcodeScanner: BarcodeScanner, private modalCtrl : ModalController) {


  this.af.auth.onAuthStateChanged(function(user) {
  if (!user) {
  //this.navCtrl.setRoot(LoginPage);

  } else {

  console.log("user : "+user.uid);

  }
  });

}

next(el) {
    el.setFocus();
  }

  getMenuCat(vrestid){
    
/*
    this.restData.getRestDetails(vrestid).subscribe(data => {

      console.log(data);


    });*/

  //this.navCtrl.setRoot(MenuhomePage,{ id : vrestid});
  //console.log("restid from form : "+vrestid);

 

  }

  scanCode(){
    this.options = {
        prompt : "Scan Restaurant Barcode "
    }
    this.barcodeScanner.scan(this.options).then((barcodeData) => {

        console.log(barcodeData);
        this.scanData = barcodeData;
       // this.scanData = "1001";

        this.presentProfileModal(barcodeData.text);
    }, (err) => {
        console.log("Error occured : " + err);
    });
}

presentProfileModal(id1) {
  const profileModal = this.modalCtrl.create(Hotel1Page, { id : id1});
  console.log("id1 : "+id1);
  profileModal.present();
}

fav(){
  this.navCtrl.push(FavResPage);
}


}
