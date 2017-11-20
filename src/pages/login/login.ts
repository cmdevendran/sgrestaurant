import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import {SignupPage} from '../signup/signup';
import {HomePage} from '../home/home';
import {TabsPage} from '../tabs/tabs';
import {NpmauthProvider} from '../../providers/npmauth';
import { AngularFireAuth } from 'angularfire2/auth';

import {RegisterPage} from '../register/register';
import { App, ViewController, Nav } from 'ionic-angular';

import { ChangePwdPage } from '../change-pwd/change-pwd';
import { ResetPwdPage } from '../reset-pwd/reset-pwd';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  template: '<ion-nav #Nav [root]="rootPage"></ion-nav>',
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

@ViewChild(Nav) nav: Nav;

rootPage: any = TabsPage;


loginForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
	private anyErrors: any;
  private userName: string;
  authstate: any;


  constructor(public navCtrl: NavController, private fb: FormBuilder,
              public auth: AuthProvider, public npmauth : NpmauthProvider,private af: AngularFireAuth
              ) {
  console.log("Entering LoginPage...."+ this.auth.currentUser);
  /*this.af.auth.onAuthStateChanged(function(user) {
    if (!user) {
    this.navCtrl.setRoot(LoginPage);
  
    } else {
  
    console.log("user : "+user.uid);
    this.setRoot(TabsPage);
    }
    });*/

  
  


  this.loginForm = this.fb.group({
            'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])]
        });

        this.email = this.loginForm.controls['email'];
        this.password = this.loginForm.controls['password'];
  }



  login(): void {
        if(this.loginForm.valid) {

          var credentials = ({email: this.email.value, password: this.password.value}); //Added next lines
          this.auth.loginWithEmail(credentials).subscribe((data) => {
          this.userName = data.email;
          console.log("Within Login : "+ this.userName);
          this.npmauth.getAuthToken(this.auth.currentUser).subscribe((user)=>{
        //  console.log(user.token);
          });

        
       // this.navCtrl.setRoot(HomePage);
       //this.navCtrl.push(TabsPage,this.restid);
       this.navCtrl.setRoot(TabsPage,this.restid);


          },
          (error) => {
          console.log(error);

          this.anyErrors = error;


  },
  () => {
    console.log("completed");
  });



    }
    }

restid : any ;
    restlogin(): void {
          if(this.loginForm.valid) {

            var credentials = ({email: this.email.value, password: this.password.value}); //Added next lines
            this.auth.loginWithEmail(credentials).subscribe((data) => {
          //  this.userName = data.email;
            console.log("Within Login : "+ this.userName);
            //this.npmauth.getAuthToken(this.auth.currentUser).subscribe((user)=>{
          //  console.log(user.token);
            //});
            let uid = {
            id : this.auth.currentUser
            };
            console.log("uid : "+uid);
            this.npmauth.getRestIdForUser(uid).subscribe((rest)=>{
            console.log(rest.restaurantid);
            this.restid = rest.restaurantid;
            });

         // this.navCtrl.setRoot(HomePage,this.restid);
        // this.navCtrl.push(TabsPage,this.restid);



            },
            (error) => {
            console.log(error);

            this.anyErrors = error;


    },
    () => {
      console.log("completed");
    });



      }
      }



    

    register(): void{
    //this.navCtrl.setRoot(UserRegisterPage);
    this.navCtrl.push(SignupPage);
    }

    getToken():void{

    }

    forgotPassword(): void{
      this.navCtrl.push(ResetPwdPage);
    }

   
}
