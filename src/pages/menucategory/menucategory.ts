import { Component} from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { AuthProvider } from '../../providers/auth/auth';
import firebase from 'firebase';

/**
 * Generated class for the MenucategoryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()

@Component({
  selector: 'page-menucategory',
  templateUrl: 'menucategory.html',
})
export class MenucategoryPage {
  cats: FirebaseListObservable<any[]>;


  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public auth: AuthProvider, public db: AngularFireDatabase) {


    this.cats = db.list('/' + this.auth.currentUser + '/category');
    console.log('/' + this.auth.currentUser + '/category');
    this.auth.checkAuth();
    if (this.auth.myauthdata == null) {
      console.log("credentials from category");
      //this.auth.loginWithEmail(credentials);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenucategoryPage');
  }

  getCategories(): FirebaseListObservable<any> {
    return this.cats;
  }

  addCategory() {
    let prompt = this.alertCtrl.create({
      title: 'Category Name',
      message: "Enter a Menu Category Name",
      inputs: [
        {
          name: 'categoryname',
          placeholder: 'Category Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.cats.push({
              categoryname: data.categoryname
            });
          }
        }
      ]
    });
    prompt.present();
  }

  removeCat(catId: string) {
    let confirm = this.alertCtrl.create({
      title: 'Category Delete?',
      message: 'Do you want to Delete?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.cats.remove(catId);
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }

  public items: FirebaseListObservable<any[]>;
  restkey: string;
  getRestaurantID(): string {
    console.log('restaurant id clicked ' + this.auth.currentUser);

    this.items = this.db.list('/users/' + this.auth.currentUser, { preserveSnapshot: true });
    this.items
      .subscribe(snapshots => {
        //  console.log(snapshots.restaurantid.val());

        snapshots.forEach(snapshot => {
          if (snapshot.key == "restaurantid") {
            this.restkey = snapshot.val();
          }
          // console.log(snapshot.key);
          // console.log(snapshot.val());
        });



      });
    console.log("rest key returned : " + this.restkey);
    return this.restkey;
  }








}
