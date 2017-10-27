import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import MyordersPage from '../myorders/myorders';
import dPage, { ProfilePage } from '../profile/profile';
import {HomePage} from '../home/home';
import { DummyPage } from '../dummy/dummy';
import { AuthProvider } from '../../providers/auth/auth';
import { RestProvider } from '../../providers/restaurant';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { MyordersPage } from '../myorders/myorders';


/**
 * Generated class for the TabsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root=HomePage;
  tab2Root = MyordersPage;
 // tab3Root = DummyPage;
 tab3Root = ProfilePage;

  constructor(public navCtrl: NavController, navParams: NavParams, public auth: AuthProvider, private restData: RestProvider,private af: AngularFireAuth) {
   // this.tab2Root = MyordersPage;
   // this.tab3Root = DummyPage;

    if(this.auth.currentUser){
       console.log("Current user : "+this.auth.currentUser);
    } else {
      //this.navCtrl.push(LoginPage);
  
    }
    
  
  

}
}
