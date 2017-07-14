import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public auth: AuthProvider) {

  }

  checkstate(): void{
  if (this.auth.currentUser) {
        console.log("User : "+this.auth.currentUser);



  }else{
  console.log("User : Not Logged in");
  this.navCtrl.push(LoginPage);
  this.navCtrl.setRoot(LoginPage);
  }
  }

  ionViewDidLoad() {



     //Check if already authenticated
     this.auth.checkState().then((res) => {
         console.log("Already authorized");
         this.navCtrl.setRoot(HomePage);
     }, (err) => {
         console.log("Not already authorized");
         this.navCtrl.setRoot(LoginPage);

     });

 }










}
