import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import {SignupPage} from '../signup/signup';
import {HomePage} from '../home/home';

import {RegisterPage} from '../register/register';
import { App, ViewController, Nav } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {

@ViewChild(Nav) nav: Nav;

rootPage: any = HomePage;


loginForm: FormGroup;
  email: AbstractControl;
  password: AbstractControl;
	private anyErrors: any;
  private userName: string;
  authstate: any;


  constructor(public navCtrl: NavController, private fb: FormBuilder,
              public auth: AuthProvider
              ) {
  console.log("Entering LoginPage....");


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
          console.log(this.userName);
          //this.navCtrl.setRoot(HomePage);
        this.navCtrl.setRoot(HomePage);
      //  this.navCtrl.pop();


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

    signUp(): void{
    this.navCtrl.setRoot(SignupPage);
    }

    register(): void{
    this.navCtrl.setRoot(RegisterPage);
    }



}
