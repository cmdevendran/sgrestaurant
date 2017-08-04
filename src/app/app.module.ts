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
    MenuhomePage

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
    MenuhomePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    RestProvider,
    AskProvider,
    NpmauthProvider
  ]
})
export class AppModule {}
