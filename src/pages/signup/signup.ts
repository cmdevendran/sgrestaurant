import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2'
import {HomePage} from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  profile : FirebaseListObservable<any[]>;


  email: AbstractControl;
  password: AbstractControl;
  mobile: AbstractControl;
  displayname: AbstractControl;
  signForm: FormGroup;
  photourl : any;
  email2 : string;

  private anyErrors: any;
  private userName: any;
  authstate: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder,
    private auth: AuthProvider, private firebasedb: AngularFireDatabase, private af: AngularFireModule) {
    console.log("Entering SignupPage....");
    this.signForm = this.fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.pattern(/[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      'mobile': ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(8)])],
      'displayname': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
    this.email = this.signForm.controls['email'];
    this.password = this.signForm.controls['password'];
    this.mobile = this.signForm.controls['mobile'];
    this.displayname = this.signForm.controls['displayname'];
  }

  signup(): void {
    if (this.signForm.valid) {
      var credentials = ({ email: this.email.value, password: this.password.value }); //Added next lines
      this.auth.SignInNewUser(credentials).subscribe((user) => {
        this.userName = this.auth.currentUser;
        console.log("User Name : " + this.userName);
        this.addProfileDetails();
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






  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  addProfileDetails() :void{
  console.log("within profile details adding...")
    this.profile = this.firebasedb.list('/users/'+this.auth.currentUID+'/profile');
    console.log(this.auth.currentUser);
    this.profile.push({
      active: true,
      blocked: false,
      verified: true,
      createddate: "",
      //displayname: this.displayname,
      displayname: "Devendran",
      mobile: "91812102",
      photourl:"",
      email: this.auth.currentUserName
    });

  }

}
