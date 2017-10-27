import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ProfilePage } from '../pages/profile/profile';
import {RegisterPage} from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { firebaseConfig } from '../env/environment';
import { AuthProvider } from '../providers/auth/auth';
import { AskProvider } from '../providers/ask';
import { RestProvider } from '../providers/restaurant';
import {NpmauthProvider} from '../providers/npmauth';
import { CreatemenuitemPage } from '../pages/createmenuitem/createmenuitem';
import { MenuitemPage } from '../pages/menuitem/menuitem';
import { MenuhomePage } from '../pages/menuhome/menuhome';
import { OrderPage } from '../pages/order/order';
import { MyordersPage } from '../pages/myorders/myorders';
//import {CheckoutPage} from '../pages/checkout/checkout';
import {CheckoutPage} from '../pages/checkout/checkout';
import {VieworderPage} from '../pages/vieworder/vieworder';
import {TabsPage} from '../pages/tabs/tabs';
import {ValidationProvider} from '../providers/validation';
import { DecimalPipe } from "@angular/common";
import {EnterPinPage} from '../pages/enter-pin/enter-pin';
import { Keyboard } from '@ionic-native/keyboard';
import { HotelPage } from "../pages/hotel/hotel";
import { Hotel1Page } from "../pages/hotel1/hotel1";
import { CartPage } from '../pages/cart/cart';
import { DummyPage } from '../pages/dummy/dummy';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';



@NgModule({
  declarations: [
    MyApp,

    HomePage,
    LoginPage,
    ProfilePage,
    SignupPage,
    RegisterPage,
    CreatemenuitemPage,
    MenuitemPage,
    MenuhomePage,
    CheckoutPage,
    OrderPage,
    MyordersPage,
    VieworderPage,
    TabsPage,
    EnterPinPage,
    HotelPage,
    Hotel1Page,
    DummyPage,
    CartPage
   


  ],
  imports: [
    BrowserModule,
     HttpModule,
    IonicModule.forRoot(MyApp),

    AngularFireModule.initializeApp(firebaseConfig),
  AngularFireDatabaseModule,
  AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ProfilePage,
    SignupPage,
    RegisterPage,
    CreatemenuitemPage,
    MenuitemPage,
    MenuhomePage,
    CheckoutPage,
    OrderPage,
    MyordersPage,
    VieworderPage,
    TabsPage,
    EnterPinPage,
    HotelPage,
    Hotel1Page,
    CartPage,

    DummyPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    RestProvider,
    AskProvider,
    NpmauthProvider,
    ValidationProvider,
    Keyboard,
    BarcodeScanner,
    DecimalPipe
  ]
})
export class AppModule {}
