import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import { CreatemenuitemPage } from '../pages/createmenuitem/createmenuitem';
import { MyordersPage } from '../pages/myorders/myorders';
import { MenuitemPage } from '../pages/menuitem/menuitem';
import {TabsPage} from '../pages/tabs/tabs';


import { AngularFireAuth } from 'angularfire2/auth';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;


  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
            private af: AngularFireAuth) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'TabsPage', component: TabsPage},
      { title: 'Home', component: HomePage },
      { title: 'Profile', component: ProfilePage },
      { title: 'Login', component: LoginPage },
      { title: 'Menu categoryname', component: MenuitemPage},
      { title: 'Menu Items', component: CreatemenuitemPage},
        { title: 'My Orders', component: MyordersPage},
       

    ];

  }

  initializeApp() {

    this.platform.ready().then(() => {

      this.af.auth.onAuthStateChanged(function(user) {
        if (!user) {
        //  this.rootPage = LoginPage;
     
      
        } else {
      
        console.log("user component : "+user.uid);
       
        /*this.nav.setRoot(TabsPage).then(()=>{
          this.nav.popToRoot();
          }).catch(err=>{
          alert(err.toString());
          });*/
    
        }
        });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
